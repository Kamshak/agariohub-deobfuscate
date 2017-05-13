# pylint: disable=W0311
# pylint: disable=C0325
# pylint: disable=C0103

import re
from slimit import ast
from slimit.parser import Parser
from slimit.visitors import nodevisitor
from slimit.visitors.ecmavisitor import ECMAVisitor

class Visitor(ECMAVisitor):
  def __init__(self, variables):
    super(Visitor, self).__init__()
    self.variables = variables
  
  def visit_BracketAccessor(self, node):
    if type(node.node) == ast.Identifier and type(node.expr) == ast.Number:
      if node.node.value in self.variables:
        arrValues = self.variables[node.node.value]
        index = int(node.expr.value)
        return '%s' % repr(arrValues[index])

    return '%s[%s]' % (self.visit(node.node), self.visit(node.expr))

  def visit_String(self, node):
    return repr(eval(node.value))


def replace_array(js_file):
  parser = Parser()
  tree = parser.parse(js_file)

  vis1 = ECMAVisitor()

  variables = {}
  for child in tree.children():
    print child
    x = [x for x in nodevisitor.visit(child)]
    if type(child) == ast.VarStatement:
      try:
        nodes = [x for x in nodevisitor.visit(child)]
        if type(nodes[0].initializer) == ast.String:
          variables[nodes[0].identifier.value] = nodes[0].initializer.value
        elif type(nodes[0].initializer) == ast.Number:
          variables[nodes[0].identifier.value] = eval(nodes[0].initializer.to_ecma())
        elif type(nodes[0].initializer) == ast.BinOp:
          variables[nodes[0].identifier.value] = eval(nodes[0].initializer.to_ecma())
        elif type(nodes[0].initializer) == ast.Array:
          #print(nodes[0].initializer.to_ecma())
          variables[nodes[0].identifier.value] = eval(nodes[0].initializer.to_ecma())
        else:
          print((type(nodes[0].identifier), nodes[0].identifier.value, nodes[0].initializer))
      except Exception as e:
        print e
        #print (child.to_ecma())
  
  visitor = Visitor(variables)

  return visitor.visit_Program(tree)

if __name__ == '__main__':
  import argparse
  argParser = argparse.ArgumentParser(description='Try to deobfuscate JavaScript files')
  argParser.add_argument('inp', metavar="file", type=str, help='File to analyse')
  argParser.add_argument('out', metavar="file", type=str, help='File to analyse')
  args = argParser.parse_args()

  js_file = open(args.inp, 'r').read()
  result = replace_array(js_file)

  if args.out:
    open(args.out, 'w').write(result)
  else:
    print(result)
