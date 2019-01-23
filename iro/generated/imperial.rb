# -*- coding: utf-8 -*- #

module Rouge
  module Lexers
    class Rpl < RegexLexer
      title     "rpl"
      tag       'Rpl'
      mimetypes 'text/x-rpl'
      filenames '*.rpl'

      state:root do
          rule /([#]+)(.*$)/ do
            groups Comment::Single, Comment::Single
          end
          rule /([@])(')/ do
            groups Punctuation, Punctuation
            push :refstr_all__1
          end
          rule /([@])(\uff07)/ do
            groups Punctuation, Punctuation
            push :refstr_all__2
          end
          rule /([@])(\u2018)/ do
            groups Punctuation, Punctuation
            push :refstr_all__3
          end
          rule /([@])(\u2019)/ do
            groups Punctuation, Punctuation
            push :refstr_all__4
          end
          rule /([@])(\u275b)/ do
            groups Punctuation, Punctuation
            push :refstr_all__5
          end
          rule /([@])(\u275c)/ do
            groups Punctuation, Punctuation
            push :refstr_all__6
          end
          rule /([@])(\u201b)/ do
            groups Punctuation, Punctuation
            push :refstr_all__7
          end
          rule /([@])(\u300c)/ do
            groups Punctuation, Punctuation
            push :refstr_all__8
          end
          rule /([@])(\u3008)/ do
            groups Punctuation, Punctuation
            push :refstr_all__9
          end
          rule /([@])(\u201a)/ do
            groups Punctuation, Punctuation
            push :refstr_all__10
          end
          rule /([@])(\u275f)/ do
            groups Punctuation, Punctuation
            push :refstr_all__11
          end
          rule /([@])(\u2039)/ do
            groups Punctuation, Punctuation
            push :refstr_all__12
          end
          rule /([@])(\u203a)/ do
            groups Punctuation, Punctuation
            push :refstr_all__13
          end
          rule /([@])(\u276e)/ do
            groups Punctuation, Punctuation
            push :refstr_all__14
          end
          rule /([@])(\u276f)/ do
            groups Punctuation, Punctuation
            push :refstr_all__15
          end
          rule /([@])(")/ do
            groups Punctuation, Punctuation
            push :refstr_all__16
          end
          rule /([@])(\uff02)/ do
            groups Punctuation, Punctuation
            push :refstr_all__17
          end
          rule /([@])(\u201c)/ do
            groups Punctuation, Punctuation
            push :refstr_all__18
          end
          rule /([@])(\u201d)/ do
            groups Punctuation, Punctuation
            push :refstr_all__19
          end
          rule /([@])(\u275d)/ do
            groups Punctuation, Punctuation
            push :refstr_all__20
          end
          rule /([@])(\u275e)/ do
            groups Punctuation, Punctuation
            push :refstr_all__21
          end
          rule /([@])(\u{s1:4x}\u{s2:4x})/ do
            groups Punctuation, Punctuation
            push :refstr_all__22
          end
          rule /([@])(\u{s1:4x}\u{s2:4x})/ do
            groups Punctuation, Punctuation
            push :refstr_all__23
          end
          rule /([@])(\u201f)/ do
            groups Punctuation, Punctuation
            push :refstr_all__24
          end
          rule /([@])(\u300e)/ do
            groups Punctuation, Punctuation
            push :refstr_all__25
          end
          rule /([@])(\u300a)/ do
            groups Punctuation, Punctuation
            push :refstr_all__26
          end
          rule /([@])(\u201e)/ do
            groups Punctuation, Punctuation
            push :refstr_all__27
          end
          rule /([@])(\u2760)/ do
            groups Punctuation, Punctuation
            push :refstr_all__28
          end
          rule /([@])(\u{s1:4x}\u{s2:4x})/ do
            groups Punctuation, Punctuation
            push :refstr_all__29
          end
          rule /([@])(\u  ab)/ do
            groups Punctuation, Punctuation
            push :refstr_all__30
          end
          rule /([@])(\u  bb)/ do
            groups Punctuation, Punctuation
            push :refstr_all__31
          end
          rule /(')/, Punctuation, :string_all__1
          rule /(\uff07)/, Punctuation, :string_all__2
          rule /(\u2018)/, Punctuation, :string_all__3
          rule /(\u2019)/, Punctuation, :string_all__4
          rule /(\u275b)/, Punctuation, :string_all__5
          rule /(\u275c)/, Punctuation, :string_all__6
          rule /(\u201b)/, Punctuation, :string_all__7
          rule /(\u300c)/, Punctuation, :string_all__8
          rule /(\u3008)/, Punctuation, :string_all__9
          rule /(\u201a)/, Punctuation, :string_all__10
          rule /(\u275f)/, Punctuation, :string_all__11
          rule /(\u2039)/, Punctuation, :string_all__12
          rule /(\u203a)/, Punctuation, :string_all__13
          rule /(\u276e)/, Punctuation, :string_all__14
          rule /(\u276f)/, Punctuation, :string_all__15
          rule /(")/, Punctuation, :string_all__16
          rule /(\uff02)/, Punctuation, :string_all__17
          rule /(\u201c)/, Punctuation, :string_all__18
          rule /(\u201d)/, Punctuation, :string_all__19
          rule /(\u275d)/, Punctuation, :string_all__20
          rule /(\u275e)/, Punctuation, :string_all__21
          rule /(\u{s1:4x}\u{s2:4x})/, Punctuation, :string_all__22
          rule /(\u{s1:4x}\u{s2:4x})/, Punctuation, :string_all__23
          rule /(\u201f)/, Punctuation, :string_all__24
          rule /(\u300e)/, Punctuation, :string_all__25
          rule /(\u300a)/, Punctuation, :string_all__26
          rule /(\u201e)/, Punctuation, :string_all__27
          rule /(\u2760)/, Punctuation, :string_all__28
          rule /(\u{s1:4x}\u{s2:4x})/, Punctuation, :string_all__29
          rule /(\u  ab)/, Punctuation, :string_all__30
          rule /(\u  bb)/, Punctuation, :string_all__31
          rule /([@])(--|[–—―])/ do
            groups Punctuation, Punctuation
            push :dash_refstring__1
          end
          rule /(--|[–—―])([\+])/ do
            groups Punctuation, Operator
            push :math_dash_string__1
          end
          rule /(--|[–—―])/, Punctuation, :dash_string__1
          rule /(?=[@][`])/, String, :refmultistr__1
          rule /([`]{3})([\+])/ do
            groups Punctuation, Operator
            push :math_quoted3__1
          end
          rule /([`])([\+])/ do
            groups Punctuation, Operator
            push :math_quoted1__1
          end
          rule /(?=[`])/, String, :multistr__1
          rule /([@])(\s*)([\(])/ do
            groups Punctuation, String, Punctuation
            push :reference_paren__1
          end
          rule /([@])(\s*)([\[])/ do
            groups Punctuation, String, Punctuation
            push :reference_brack__1
          end
          rule /([@])(\s*)(?:(this|g*parent|w*back|Defs)|([\w_\d]+)|)/ do
            groups Punctuation, String, Keyword, Name::Entity
            push :reference_inner
          end
          rule /(?:(\b\d+)|([\$][\da-fA-F]+))(\s*)([-~*+±]|\+-)(\s*)(?:(\b\d+)|([\$][\da-fA-F]+))/ do
            groups Number, Number::Hex, String, Operator, String, Number, Number::Hex
          end
          rule /(?:(\b\d+)|([\$][\da-fA-F]+))(?=\s*[:,#\)\]\}]|\s*$)/ do
            groups Number, Number
          end
          rule /([\[])/, Punctuation, :list__1
          rule /([:])(\1?)/ do
            groups Punctuation, Punctuation
          end
          rule /(ROM|RPL|rom|rpl)|(\b[a-z][a-z\d]*)/ do
            groups Keyword, Keyword::Type
          end
          rule /(\b[\w_\d]+)/, Name::Entity
          rule /([\{])/, Punctuation, :struct_body__1
          rule /(\n|\r|\r\n)/, String
          rule /./, String
      end

      state:dash_refstring__1 do
          rule /(\n|\r|\r\n)/, Comment::Single, :pop!
          rule /([\$](?:[\da-fA-F]{2}|\([\da-fA-F]*\)|["'`znrt\$@]))|([\$].)/ do
            groups String::Escape, Generic::Error
          end
          rule /([@])([\(])(\s*)/ do
            groups Punctuation, Punctuation, String
            push :is_reference_paren__1
          end
          rule /([@])([\[])(\s*)/ do
            groups Punctuation, Punctuation, String
            push :is_reference_brack__1
          end
          rule /([@])([\w_\d]+|)/ do
            groups Punctuation, Name::Entity
            push :is_reference_inner
          end
          rule /([^\$@\n\r]+)/, String::Heredoc
          rule /(\n|\r|\r\n)/, String
          rule /./, String
      end

      state:dash_string__1 do
          rule /(\n|\r|\r\n)/, Comment::Single, :pop!
          rule /([\$](?:[\da-fA-F]{2}|\([\da-fA-F]*\)|["'`znrt\$@]))|([\$].)/ do
            groups String::Escape, Generic::Error
          end
          rule /([^\$\n\r]+)/, String::Heredoc
          rule /(\n|\r|\r\n)/, String
          rule /./, String
      end

      state:index__1 do
          rule /([#]+)(.*$)/ do
            groups Comment::Single, Comment::Single
          end
          rule /([@])(')/ do
            groups Punctuation, Punctuation
            push :refstr_all__1
          end
          rule /([@])(\uff07)/ do
            groups Punctuation, Punctuation
            push :refstr_all__2
          end
          rule /([@])(\u2018)/ do
            groups Punctuation, Punctuation
            push :refstr_all__3
          end
          rule /([@])(\u2019)/ do
            groups Punctuation, Punctuation
            push :refstr_all__4
          end
          rule /([@])(\u275b)/ do
            groups Punctuation, Punctuation
            push :refstr_all__5
          end
          rule /([@])(\u275c)/ do
            groups Punctuation, Punctuation
            push :refstr_all__6
          end
          rule /([@])(\u201b)/ do
            groups Punctuation, Punctuation
            push :refstr_all__7
          end
          rule /([@])(\u300c)/ do
            groups Punctuation, Punctuation
            push :refstr_all__8
          end
          rule /([@])(\u3008)/ do
            groups Punctuation, Punctuation
            push :refstr_all__9
          end
          rule /([@])(\u201a)/ do
            groups Punctuation, Punctuation
            push :refstr_all__10
          end
          rule /([@])(\u275f)/ do
            groups Punctuation, Punctuation
            push :refstr_all__11
          end
          rule /([@])(\u2039)/ do
            groups Punctuation, Punctuation
            push :refstr_all__12
          end
          rule /([@])(\u203a)/ do
            groups Punctuation, Punctuation
            push :refstr_all__13
          end
          rule /([@])(\u276e)/ do
            groups Punctuation, Punctuation
            push :refstr_all__14
          end
          rule /([@])(\u276f)/ do
            groups Punctuation, Punctuation
            push :refstr_all__15
          end
          rule /([@])(")/ do
            groups Punctuation, Punctuation
            push :refstr_all__16
          end
          rule /([@])(\uff02)/ do
            groups Punctuation, Punctuation
            push :refstr_all__17
          end
          rule /([@])(\u201c)/ do
            groups Punctuation, Punctuation
            push :refstr_all__18
          end
          rule /([@])(\u201d)/ do
            groups Punctuation, Punctuation
            push :refstr_all__19
          end
          rule /([@])(\u275d)/ do
            groups Punctuation, Punctuation
            push :refstr_all__20
          end
          rule /([@])(\u275e)/ do
            groups Punctuation, Punctuation
            push :refstr_all__21
          end
          rule /([@])(\u{s1:4x}\u{s2:4x})/ do
            groups Punctuation, Punctuation
            push :refstr_all__22
          end
          rule /([@])(\u{s1:4x}\u{s2:4x})/ do
            groups Punctuation, Punctuation
            push :refstr_all__23
          end
          rule /([@])(\u201f)/ do
            groups Punctuation, Punctuation
            push :refstr_all__24
          end
          rule /([@])(\u300e)/ do
            groups Punctuation, Punctuation
            push :refstr_all__25
          end
          rule /([@])(\u300a)/ do
            groups Punctuation, Punctuation
            push :refstr_all__26
          end
          rule /([@])(\u201e)/ do
            groups Punctuation, Punctuation
            push :refstr_all__27
          end
          rule /([@])(\u2760)/ do
            groups Punctuation, Punctuation
            push :refstr_all__28
          end
          rule /([@])(\u{s1:4x}\u{s2:4x})/ do
            groups Punctuation, Punctuation
            push :refstr_all__29
          end
          rule /([@])(\u  ab)/ do
            groups Punctuation, Punctuation
            push :refstr_all__30
          end
          rule /([@])(\u  bb)/ do
            groups Punctuation, Punctuation
            push :refstr_all__31
          end
          rule /(')/, Punctuation, :string_all__1
          rule /(\uff07)/, Punctuation, :string_all__2
          rule /(\u2018)/, Punctuation, :string_all__3
          rule /(\u2019)/, Punctuation, :string_all__4
          rule /(\u275b)/, Punctuation, :string_all__5
          rule /(\u275c)/, Punctuation, :string_all__6
          rule /(\u201b)/, Punctuation, :string_all__7
          rule /(\u300c)/, Punctuation, :string_all__8
          rule /(\u3008)/, Punctuation, :string_all__9
          rule /(\u201a)/, Punctuation, :string_all__10
          rule /(\u275f)/, Punctuation, :string_all__11
          rule /(\u2039)/, Punctuation, :string_all__12
          rule /(\u203a)/, Punctuation, :string_all__13
          rule /(\u276e)/, Punctuation, :string_all__14
          rule /(\u276f)/, Punctuation, :string_all__15
          rule /(")/, Punctuation, :string_all__16
          rule /(\uff02)/, Punctuation, :string_all__17
          rule /(\u201c)/, Punctuation, :string_all__18
          rule /(\u201d)/, Punctuation, :string_all__19
          rule /(\u275d)/, Punctuation, :string_all__20
          rule /(\u275e)/, Punctuation, :string_all__21
          rule /(\u{s1:4x}\u{s2:4x})/, Punctuation, :string_all__22
          rule /(\u{s1:4x}\u{s2:4x})/, Punctuation, :string_all__23
          rule /(\u201f)/, Punctuation, :string_all__24
          rule /(\u300e)/, Punctuation, :string_all__25
          rule /(\u300a)/, Punctuation, :string_all__26
          rule /(\u201e)/, Punctuation, :string_all__27
          rule /(\u2760)/, Punctuation, :string_all__28
          rule /(\u{s1:4x}\u{s2:4x})/, Punctuation, :string_all__29
          rule /(\u  ab)/, Punctuation, :string_all__30
          rule /(\u  bb)/, Punctuation, :string_all__31
          rule /([@])(--|[–—―])/ do
            groups Punctuation, Punctuation
            push :dash_refstring__1
          end
          rule /(--|[–—―])([\+])/ do
            groups Punctuation, Operator
            push :math_dash_string__1
          end
          rule /(--|[–—―])/, Punctuation, :dash_string__1
          rule /(?=[@][`])/, String, :refmultistr__1
          rule /([`]{3})([\+])/ do
            groups Punctuation, Operator
            push :math_quoted3__1
          end
          rule /([`])([\+])/ do
            groups Punctuation, Operator
            push :math_quoted1__1
          end
          rule /(?=[`])/, String, :multistr__1
          rule /([@])(\s*)([\(])/ do
            groups Punctuation, String, Punctuation
            push :reference_paren__1
          end
          rule /([@])(\s*)([\[])/ do
            groups Punctuation, String, Punctuation
            push :reference_brack__1
          end
          rule /([@])(\s*)(?:(this|g*parent|w*back|Defs)|([\w_\d]+)|)/ do
            groups Punctuation, String, Keyword, Name::Entity
            push :reference_inner
          end
          rule /(?:(\b\d+)|([\$][\da-fA-F]+))(?=\s*[:,#\)\]\}]|\s*$)/ do
            groups Number, Number
          end
          rule /([\+])/, Operator, :math_literal__1
          rule /(?=\S)(?![a-z][a-z\d]*\s*[\(\[\{])(?:(false|true|undefined|black|white|red|blue|green|yellow|magenta|pink|cyan|gray|grey|transparent|byte|short|long|double|LRUD|LRDU|RLUD|RLDU|UDLR|UDRL|DULR|DURL|LU|LD|RU|RD|UL|UR|DL|DR|big|little|(?:un)?signed|left|right|r?center|l?both|expand|\*)|([^:,#\(\[\{\)\]\}\n\r]+))/ do
            groups Keyword, String::Heredoc
          end
          rule /(\b[a-z][a-z\d]*)(?=\s*[\(])/, Keyword::Type, :value_struct_tp__1
          rule /(\b[a-z][a-z\d]*)(?=\s*[\[])/, Keyword::Type, :value_struct_tl__1
          rule /(\b[a-z][a-z\d]*)(?=\s*[\{])/, Keyword::Type, :value_struct_tb__1
          rule /(\n|\r|\r\n)/, String
          rule /./, String
      end

      state:is_index__1 do
          rule /([@])(\s*)([\(])/ do
            groups Punctuation, String, Punctuation
            push :reference_paren__1
          end
          rule /([@])(\s*)([\[])/ do
            groups Punctuation, String, Punctuation
            push :reference_brack__1
          end
          rule /([@])(\s*)(?:(this|g*parent|w*back|Defs)|([\w_\d]+)|)/ do
            groups Punctuation, String, Keyword, Name::Entity
            push :reference_inner
          end
          rule /(?:(\b\d+)|([\$][\da-fA-F]+))(?=\s*[:,#\)\]\}]|\s*$)/ do
            groups Number, Number
          end
          rule /([\+])/, Operator, :math_literal__1
          rule /(?=\S)(?![a-z][a-z\d]*\s*[\(\[\{])(?:(false|true|undefined|black|white|red|blue|green|yellow|magenta|pink|cyan|gray|grey|transparent|byte|short|long|double|LRUD|LRDU|RLUD|RLDU|UDLR|UDRL|DULR|DURL|LU|LD|RU|RD|UL|UR|DL|DR|big|little|(?:un)?signed|left|right|r?center|l?both|expand|\*)|([^:,#\(\[\{\)\]\}\n\r]+))/ do
            groups Keyword, String::Heredoc
          end
          rule /(\b[a-z][a-z\d]*)(?=\s*[\(])/, Keyword::Type, :value_struct_tp__1
          rule /(\b[a-z][a-z\d]*)(?=\s*[\[])/, Keyword::Type, :value_struct_tl__1
          rule /(\b[a-z][a-z\d]*)(?=\s*[\{])/, Keyword::Type, :value_struct_tb__1
          rule /(\n|\r|\r\n)/, String
          rule /./, String
      end

      state:is_reference_brack__1 do
          rule /([\w_\d]+|)/, Name::Entity, :is_reference_inner
          rule /(\n|\r|\r\n)/, String
          rule /./, String
      end

      state:is_reference_inner do
          rule /([\[](?=["']))|([\[])/ do
            groups Generic::Error, Punctuation
            push :is_index__1
          end
          rule /([\{](?=["']))|([\{])/ do
            groups Generic::Error, Punctuation
            push :is_subscript__1
          end
          rule /(->|[.\-─])([a-z][a-z\d]*)/ do
            groups Punctuation, Name::Attribute
          end
          rule /(\n|\r|\r\n)/, String
          rule /./, String
      end

      state:is_reference_paren__1 do
          rule /([\w_\d]+|)/, Name::Entity, :is_reference_inner
          rule /(\n|\r|\r\n)/, String
          rule /./, String
      end

      state:is_subscript__1 do
          rule /(?=\S)(?![a-z][a-z\d]*\s*[\(\[\{])(?:(false|true|undefined|black|white|red|blue|green|yellow|magenta|pink|cyan|gray|grey|transparent|byte|short|long|double|LRUD|LRDU|RLUD|RLDU|UDLR|UDRL|DULR|DURL|LU|LD|RU|RD|UL|UR|DL|DR|big|little|(?:un)?signed|left|right|r?center|l?both|expand|\*)|([^:,#\(\[\{\)\]\}\n\r]+))/ do
            groups Keyword, String::Heredoc
          end
          rule /(\n|\r|\r\n)/, String
          rule /./, String
      end

      state:key_value_body do
          rule /([#]+)(.*$)/ do
            groups Comment::Single, Comment::Single
          end
          rule /([@])(')/ do
            groups Punctuation, Punctuation
            push :refstr_all__1
          end
          rule /([@])(\uff07)/ do
            groups Punctuation, Punctuation
            push :refstr_all__2
          end
          rule /([@])(\u2018)/ do
            groups Punctuation, Punctuation
            push :refstr_all__3
          end
          rule /([@])(\u2019)/ do
            groups Punctuation, Punctuation
            push :refstr_all__4
          end
          rule /([@])(\u275b)/ do
            groups Punctuation, Punctuation
            push :refstr_all__5
          end
          rule /([@])(\u275c)/ do
            groups Punctuation, Punctuation
            push :refstr_all__6
          end
          rule /([@])(\u201b)/ do
            groups Punctuation, Punctuation
            push :refstr_all__7
          end
          rule /([@])(\u300c)/ do
            groups Punctuation, Punctuation
            push :refstr_all__8
          end
          rule /([@])(\u3008)/ do
            groups Punctuation, Punctuation
            push :refstr_all__9
          end
          rule /([@])(\u201a)/ do
            groups Punctuation, Punctuation
            push :refstr_all__10
          end
          rule /([@])(\u275f)/ do
            groups Punctuation, Punctuation
            push :refstr_all__11
          end
          rule /([@])(\u2039)/ do
            groups Punctuation, Punctuation
            push :refstr_all__12
          end
          rule /([@])(\u203a)/ do
            groups Punctuation, Punctuation
            push :refstr_all__13
          end
          rule /([@])(\u276e)/ do
            groups Punctuation, Punctuation
            push :refstr_all__14
          end
          rule /([@])(\u276f)/ do
            groups Punctuation, Punctuation
            push :refstr_all__15
          end
          rule /([@])(")/ do
            groups Punctuation, Punctuation
            push :refstr_all__16
          end
          rule /([@])(\uff02)/ do
            groups Punctuation, Punctuation
            push :refstr_all__17
          end
          rule /([@])(\u201c)/ do
            groups Punctuation, Punctuation
            push :refstr_all__18
          end
          rule /([@])(\u201d)/ do
            groups Punctuation, Punctuation
            push :refstr_all__19
          end
          rule /([@])(\u275d)/ do
            groups Punctuation, Punctuation
            push :refstr_all__20
          end
          rule /([@])(\u275e)/ do
            groups Punctuation, Punctuation
            push :refstr_all__21
          end
          rule /([@])(\u{s1:4x}\u{s2:4x})/ do
            groups Punctuation, Punctuation
            push :refstr_all__22
          end
          rule /([@])(\u{s1:4x}\u{s2:4x})/ do
            groups Punctuation, Punctuation
            push :refstr_all__23
          end
          rule /([@])(\u201f)/ do
            groups Punctuation, Punctuation
            push :refstr_all__24
          end
          rule /([@])(\u300e)/ do
            groups Punctuation, Punctuation
            push :refstr_all__25
          end
          rule /([@])(\u300a)/ do
            groups Punctuation, Punctuation
            push :refstr_all__26
          end
          rule /([@])(\u201e)/ do
            groups Punctuation, Punctuation
            push :refstr_all__27
          end
          rule /([@])(\u2760)/ do
            groups Punctuation, Punctuation
            push :refstr_all__28
          end
          rule /([@])(\u{s1:4x}\u{s2:4x})/ do
            groups Punctuation, Punctuation
            push :refstr_all__29
          end
          rule /([@])(\u  ab)/ do
            groups Punctuation, Punctuation
            push :refstr_all__30
          end
          rule /([@])(\u  bb)/ do
            groups Punctuation, Punctuation
            push :refstr_all__31
          end
          rule /(')/, Punctuation, :string_all__1
          rule /(\uff07)/, Punctuation, :string_all__2
          rule /(\u2018)/, Punctuation, :string_all__3
          rule /(\u2019)/, Punctuation, :string_all__4
          rule /(\u275b)/, Punctuation, :string_all__5
          rule /(\u275c)/, Punctuation, :string_all__6
          rule /(\u201b)/, Punctuation, :string_all__7
          rule /(\u300c)/, Punctuation, :string_all__8
          rule /(\u3008)/, Punctuation, :string_all__9
          rule /(\u201a)/, Punctuation, :string_all__10
          rule /(\u275f)/, Punctuation, :string_all__11
          rule /(\u2039)/, Punctuation, :string_all__12
          rule /(\u203a)/, Punctuation, :string_all__13
          rule /(\u276e)/, Punctuation, :string_all__14
          rule /(\u276f)/, Punctuation, :string_all__15
          rule /(")/, Punctuation, :string_all__16
          rule /(\uff02)/, Punctuation, :string_all__17
          rule /(\u201c)/, Punctuation, :string_all__18
          rule /(\u201d)/, Punctuation, :string_all__19
          rule /(\u275d)/, Punctuation, :string_all__20
          rule /(\u275e)/, Punctuation, :string_all__21
          rule /(\u{s1:4x}\u{s2:4x})/, Punctuation, :string_all__22
          rule /(\u{s1:4x}\u{s2:4x})/, Punctuation, :string_all__23
          rule /(\u201f)/, Punctuation, :string_all__24
          rule /(\u300e)/, Punctuation, :string_all__25
          rule /(\u300a)/, Punctuation, :string_all__26
          rule /(\u201e)/, Punctuation, :string_all__27
          rule /(\u2760)/, Punctuation, :string_all__28
          rule /(\u{s1:4x}\u{s2:4x})/, Punctuation, :string_all__29
          rule /(\u  ab)/, Punctuation, :string_all__30
          rule /(\u  bb)/, Punctuation, :string_all__31
          rule /([@])(--|[–—―])/ do
            groups Punctuation, Punctuation
            push :dash_refstring__1
          end
          rule /(--|[–—―])([\+])/ do
            groups Punctuation, Operator
            push :math_dash_string__1
          end
          rule /(--|[–—―])/, Punctuation, :dash_string__1
          rule /(?=[@][`])/, String, :refmultistr__1
          rule /([`]{3})([\+])/ do
            groups Punctuation, Operator
            push :math_quoted3__1
          end
          rule /([`])([\+])/ do
            groups Punctuation, Operator
            push :math_quoted1__1
          end
          rule /(?=[`])/, String, :multistr__1
          rule /([@])(\s*)([\(])/ do
            groups Punctuation, String, Punctuation
            push :reference_paren__1
          end
          rule /([@])(\s*)([\[])/ do
            groups Punctuation, String, Punctuation
            push :reference_brack__1
          end
          rule /([@])(\s*)(?:(this|g*parent|w*back|Defs)|([\w_\d]+)|)/ do
            groups Punctuation, String, Keyword, Name::Entity
            push :reference_inner
          end
          rule /(?:(\b\d+)|([\$][\da-fA-F]+))(\s*)([-~*+±]|\+-)(\s*)(?:(\b\d+)|([\$][\da-fA-F]+))/ do
            groups Number, Number::Hex, String, Operator, String, Number, Number::Hex
          end
          rule /(?:(\b\d+)|([\$][\da-fA-F]+))(?=\s*[:,#\)\]\}]|\s*$)/ do
            groups Number, Number
          end
          rule /([\[])/, Punctuation, :list__1
          rule /([:])(\1?)/ do
            groups Punctuation, Punctuation
          end
          rule /([\+])/, Operator, :math_literal__1
          rule /(?=\S)(?![a-z][a-z\d]*\s*[\(\[\{])(?:(false|true|undefined|black|white|red|blue|green|yellow|magenta|pink|cyan|gray|grey|transparent|byte|short|long|double|LRUD|LRDU|RLUD|RLDU|UDLR|UDRL|DULR|DURL|LU|LD|RU|RD|UL|UR|DL|DR|big|little|(?:un)?signed|left|right|r?center|l?both|expand|\*)|([^:,#\(\[\{\)\]\}\n\r]+))/ do
            groups Keyword, String::Heredoc
          end
          rule /(\b[a-z][a-z\d]*)(?=\s*[\(])/, Keyword::Type, :value_struct_tp__1
          rule /(\b[a-z][a-z\d]*)(?=\s*[\[])/, Keyword::Type, :value_struct_tl__1
          rule /(\b[a-z][a-z\d]*)(?=\s*[\{])/, Keyword::Type, :value_struct_tb__1
          rule /(?=[\(])/, Keyword::Type, :value_struct_p__1
          rule /([\{])/, Punctuation, :struct_body__1
          rule /(\n|\r|\r\n)/, String
          rule /./, String
      end

      state:list__1 do
          rule /(?=.)/, String, :value_body
          rule /(\n|\r|\r\n)/, String
          rule /./, String
      end

      state:math_dash_string__1 do
          rule /(\n|\r|\r\n)/, Comment::Single, :pop!
          rule /((?:[\$]{2}|[0]x)[\da-fA-F]+)/, Number::Hex
          rule /([0]o[0-7]+)/, Number::Oct
          rule /((?:0b|%)[01]+)/, Number::Bin
          rule /([\d]+_[\d]+)/, Number
          rule /(\b\d+)/, Number
          rule /([\$](?:[\da-fA-F]{2}|\([\da-fA-F]*\)|["'`znrt\$@]))|([\$].)/ do
            groups String::Escape, Generic::Error
          end
          rule /(\*\*|<<|>>|[-+*\/&|^%])/, Operator
          rule /([<])|([>])/ do
            groups Punctuation, Punctuation
          end
          rule /([\(\)])/, Punctuation
          rule /(\n|\r|\r\n)/, String
          rule /./, String
      end

      state:math_literal__1 do
          rule /((?:[\$]{2}|[0]x)[\da-fA-F]+)/, Number::Hex
          rule /([0]o[0-7]+)/, Number::Oct
          rule /((?:0b|%)[01]+)/, Number::Bin
          rule /([\d]+_[\d]+)/, Number
          rule /(\b\d+)/, Number
          rule /([\$](?:[\da-fA-F]{2}|\([\da-fA-F]*\)|["'`znrt\$@]))|([\$].)/ do
            groups String::Escape, Generic::Error
          end
          rule /(\*\*|<<|>>|[-+*\/&|^%])/, Operator
          rule /([<])|([>])/ do
            groups Punctuation, Punctuation
          end
          rule /(\n|\r|\r\n)/, String
          rule /./, String
      end

      state:math_quoted1__1 do
          rule /((?:[\$]{2}|[0]x)[\da-fA-F]+)/, Number::Hex
          rule /([0]o[0-7]+)/, Number::Oct
          rule /((?:0b|%)[01]+)/, Number::Bin
          rule /([\d]+_[\d]+)/, Number
          rule /(\b\d+)/, Number
          rule /([\$](?:[\da-fA-F]{2}|\([\da-fA-F]*\)|["'`znrt\$@]))|([\$].)/ do
            groups String::Escape, Generic::Error
          end
          rule /(\*\*|<<|>>|[-+*\/&|^%])/, Operator
          rule /([<])|([>])/ do
            groups Punctuation, Punctuation
          end
          rule /([\(\)])/, Punctuation
          rule /(\n|\r|\r\n)/, String
          rule /./, String
      end

      state:math_quoted3__1 do
          rule /((?:[\$]{2}|[0]x)[\da-fA-F]+)/, Number::Hex
          rule /([0]o[0-7]+)/, Number::Oct
          rule /((?:0b|%)[01]+)/, Number::Bin
          rule /([\d]+_[\d]+)/, Number
          rule /(\b\d+)/, Number
          rule /([\$](?:[\da-fA-F]{2}|\([\da-fA-F]*\)|["'`znrt\$@]))|([\$].)/ do
            groups String::Escape, Generic::Error
          end
          rule /(\*\*|<<|>>|[-+*\/&|^%])/, Operator
          rule /([<])|([>])/ do
            groups Punctuation, Punctuation
          end
          rule /([\(\)])/, Punctuation
          rule /(\n|\r|\r\n)/, String
          rule /./, String
      end

      state:multistr_1__1 do
          rule /([\$](?:[\da-fA-F]{2}|\([\da-fA-F]*\)|["'`znrt\$@]))|([\$].)/ do
            groups String::Escape, Generic::Error
          end
          rule /([^`\$\n\r]+)/, String
          rule /(\n|\r|\r\n)/, String
          rule /./, String
      end

      state:multistr_2__1 do
          rule /([\$](?:[\da-fA-F]{2}|\([\da-fA-F]*\)|["'`znrt\$@]))|([\$].)/ do
            groups String::Escape, Generic::Error
          end
          rule /([^`\$\n\r]+)/, String
          rule /(\n|\r|\r\n)/, String
          rule /./, String
      end

      state:multistr_3__1 do
          rule /([\$](?:[\da-fA-F]{2}|\([\da-fA-F]*\)|["'`znrt\$@]))|([\$].)/ do
            groups String::Escape, Generic::Error
          end
          rule /([^`\$\n\r]+)/, String
          rule /(\n|\r|\r\n)/, String
          rule /./, String
      end

      state:multistr__1 do
          rule /([#]+)(.*$)/ do
            groups Comment::Single, Comment::Single
          end
          rule /([`]{ 3 }(?![`]))/, Punctuation, :multistr_3__1
          rule /([`]{ 2 }(?![`]))/, Punctuation, :multistr_2__1
          rule /([`](?![`]))/, Punctuation, :multistr_1__1
          rule /(\n|\r|\r\n)/, String
          rule /./, String
      end

      state:reference_brack__1 do
          rule /(?:(this|g*parent|w*back|Defs)|([\w_\d]+)|)/ do
            groups Keyword, Name::Entity
            push :reference_inner
          end
          rule /(\n|\r|\r\n)/, String
          rule /./, String
      end

      state:reference_inner do
          rule /([#]+)(.*$)/ do
            groups Comment::Single, Comment::Single
          end
          rule /([\[])/, Punctuation, :index__1
          rule /([\{])/, Punctuation, :subscript__1
          rule /(->|[.\-─])/, Punctuation, :reference_key__1
          rule /(\n|\r|\r\n)/, String
          rule /./, String
      end

      state:reference_key__1 do
          rule /([#]+)(.*$)/ do
            groups Comment::Single, Comment::Single
          end
          rule /(\n|\r|\r\n)/, String
          rule /./, String
      end

      state:reference_paren__1 do
          rule /(?:(this|g*parent|w*back|Defs)|([\w_\d]+)|)/ do
            groups Keyword, Name::Entity
            push :reference_inner
          end
          rule /(\n|\r|\r\n)/, String
          rule /./, String
      end

      state:refmultistr_1__1 do
          rule /([\$](?:[\da-fA-F]{2}|\([\da-fA-F]*\)|["'`znrt\$@]))|([\$].)/ do
            groups String::Escape, Generic::Error
          end
          rule /([@])(\s*)([\(])/ do
            groups Punctuation, String, Punctuation
            push :reference_paren__1
          end
          rule /([@])(\s*)([\[])/ do
            groups Punctuation, String, Punctuation
            push :reference_brack__1
          end
          rule /([@])(\s*)(?:(this|g*parent|w*back|Defs)|([\w_\d]+)|)/ do
            groups Punctuation, String, Keyword, Name::Entity
            push :reference_inner
          end
          rule /([^`\$@\n\r]+)/, String
          rule /(\n|\r|\r\n)/, String
          rule /./, String
      end

      state:refmultistr_2__1 do
          rule /([\$](?:[\da-fA-F]{2}|\([\da-fA-F]*\)|["'`znrt\$@]))|([\$].)/ do
            groups String::Escape, Generic::Error
          end
          rule /([@])(\s*)([\(])/ do
            groups Punctuation, String, Punctuation
            push :reference_paren__1
          end
          rule /([@])(\s*)([\[])/ do
            groups Punctuation, String, Punctuation
            push :reference_brack__1
          end
          rule /([@])(\s*)(?:(this|g*parent|w*back|Defs)|([\w_\d]+)|)/ do
            groups Punctuation, String, Keyword, Name::Entity
            push :reference_inner
          end
          rule /([^`\$@\n\r]+)/, String
          rule /(\n|\r|\r\n)/, String
          rule /./, String
      end

      state:refmultistr_3__1 do
          rule /([\$](?:[\da-fA-F]{2}|\([\da-fA-F]*\)|["'`znrt\$@]))|([\$].)/ do
            groups String::Escape, Generic::Error
          end
          rule /([@])(\s*)([\(])/ do
            groups Punctuation, String, Punctuation
            push :reference_paren__1
          end
          rule /([@])(\s*)([\[])/ do
            groups Punctuation, String, Punctuation
            push :reference_brack__1
          end
          rule /([@])(\s*)(?:(this|g*parent|w*back|Defs)|([\w_\d]+)|)/ do
            groups Punctuation, String, Keyword, Name::Entity
            push :reference_inner
          end
          rule /([^`\$@\n\r]+)/, String
          rule /(\n|\r|\r\n)/, String
          rule /./, String
      end

      state:refmultistr__1 do
          rule /([#]+)(.*$)/ do
            groups Comment::Single, Comment::Single
          end
          rule /([@]?)([`]{ 3 }(?![`]))/ do
            groups Punctuation, Punctuation
            push :refmultistr_3__1
          end
          rule /([@]?)([`]{ 2 }(?![`]))/ do
            groups Punctuation, Punctuation
            push :refmultistr_2__1
          end
          rule /([@]?)([`](?![`]))/ do
            groups Punctuation, Punctuation
            push :refmultistr_1__1
          end
          rule /(\n|\r|\r\n)/, String
          rule /./, String
      end

      state:refstr_all__1 do
          rule /([\$](?:[\da-fA-F]{2}|\([\da-fA-F]*\)|["'`znrt\$@]))|([\$].)/ do
            groups String::Escape, Generic::Error
          end
          rule /([@])([\(])(\s*)/ do
            groups Punctuation, Punctuation, String
            push :is_reference_paren__1
          end
          rule /([@])([\[])(\s*)/ do
            groups Punctuation, Punctuation, String
            push :is_reference_brack__1
          end
          rule /([@])([\w_\d]+|)/ do
            groups Punctuation, Name::Entity
            push :is_reference_inner
          end
          rule /([^'\$@\n\r]+(?!$))/, String::Single
          rule /(\n|\r|\r\n)/, String
          rule /./, String
      end

      state:refstr_all__10 do
          rule /([\$](?:[\da-fA-F]{2}|\([\da-fA-F]*\)|["'`znrt\$@]))|([\$].)/ do
            groups String::Escape, Generic::Error
          end
          rule /([@])([\(])(\s*)/ do
            groups Punctuation, Punctuation, String
            push :is_reference_paren__1
          end
          rule /([@])([\[])(\s*)/ do
            groups Punctuation, Punctuation, String
            push :is_reference_brack__1
          end
          rule /([@])([\w_\d]+|)/ do
            groups Punctuation, Name::Entity
            push :is_reference_inner
          end
          rule /([^\u2019\u2018\$@\n\r]+(?!$))/, String::Single
          rule /(\n|\r|\r\n)/, String
          rule /./, String
      end

      state:refstr_all__11 do
          rule /([\$](?:[\da-fA-F]{2}|\([\da-fA-F]*\)|["'`znrt\$@]))|([\$].)/ do
            groups String::Escape, Generic::Error
          end
          rule /([@])([\(])(\s*)/ do
            groups Punctuation, Punctuation, String
            push :is_reference_paren__1
          end
          rule /([@])([\[])(\s*)/ do
            groups Punctuation, Punctuation, String
            push :is_reference_brack__1
          end
          rule /([@])([\w_\d]+|)/ do
            groups Punctuation, Name::Entity
            push :is_reference_inner
          end
          rule /([^\u275c\u275b\$@\n\r]+(?!$))/, String::Single
          rule /(\n|\r|\r\n)/, String
          rule /./, String
      end

      state:refstr_all__12 do
          rule /([\$](?:[\da-fA-F]{2}|\([\da-fA-F]*\)|["'`znrt\$@]))|([\$].)/ do
            groups String::Escape, Generic::Error
          end
          rule /([@])([\(])(\s*)/ do
            groups Punctuation, Punctuation, String
            push :is_reference_paren__1
          end
          rule /([@])([\[])(\s*)/ do
            groups Punctuation, Punctuation, String
            push :is_reference_brack__1
          end
          rule /([@])([\w_\d]+|)/ do
            groups Punctuation, Name::Entity
            push :is_reference_inner
          end
          rule /([^\u203a\$@\n\r]+(?!$))/, String::Single
          rule /(\n|\r|\r\n)/, String
          rule /./, String
      end

      state:refstr_all__13 do
          rule /([\$](?:[\da-fA-F]{2}|\([\da-fA-F]*\)|["'`znrt\$@]))|([\$].)/ do
            groups String::Escape, Generic::Error
          end
          rule /([@])([\(])(\s*)/ do
            groups Punctuation, Punctuation, String
            push :is_reference_paren__1
          end
          rule /([@])([\[])(\s*)/ do
            groups Punctuation, Punctuation, String
            push :is_reference_brack__1
          end
          rule /([@])([\w_\d]+|)/ do
            groups Punctuation, Name::Entity
            push :is_reference_inner
          end
          rule /([^\u2039\$@\n\r]+(?!$))/, String::Single
          rule /(\n|\r|\r\n)/, String
          rule /./, String
      end

      state:refstr_all__14 do
          rule /([\$](?:[\da-fA-F]{2}|\([\da-fA-F]*\)|["'`znrt\$@]))|([\$].)/ do
            groups String::Escape, Generic::Error
          end
          rule /([@])([\(])(\s*)/ do
            groups Punctuation, Punctuation, String
            push :is_reference_paren__1
          end
          rule /([@])([\[])(\s*)/ do
            groups Punctuation, Punctuation, String
            push :is_reference_brack__1
          end
          rule /([@])([\w_\d]+|)/ do
            groups Punctuation, Name::Entity
            push :is_reference_inner
          end
          rule /([^\u276f\$@\n\r]+(?!$))/, String::Single
          rule /(\n|\r|\r\n)/, String
          rule /./, String
      end

      state:refstr_all__15 do
          rule /([\$](?:[\da-fA-F]{2}|\([\da-fA-F]*\)|["'`znrt\$@]))|([\$].)/ do
            groups String::Escape, Generic::Error
          end
          rule /([@])([\(])(\s*)/ do
            groups Punctuation, Punctuation, String
            push :is_reference_paren__1
          end
          rule /([@])([\[])(\s*)/ do
            groups Punctuation, Punctuation, String
            push :is_reference_brack__1
          end
          rule /([@])([\w_\d]+|)/ do
            groups Punctuation, Name::Entity
            push :is_reference_inner
          end
          rule /([^\u276e\$@\n\r]+(?!$))/, String::Single
          rule /(\n|\r|\r\n)/, String
          rule /./, String
      end

      state:refstr_all__16 do
          rule /([\$](?:[\da-fA-F]{2}|\([\da-fA-F]*\)|["'`znrt\$@]))|([\$].)/ do
            groups String::Escape, Generic::Error
          end
          rule /([@])([\(])(\s*)/ do
            groups Punctuation, Punctuation, String
            push :is_reference_paren__1
          end
          rule /([@])([\[])(\s*)/ do
            groups Punctuation, Punctuation, String
            push :is_reference_brack__1
          end
          rule /([@])([\w_\d]+|)/ do
            groups Punctuation, Name::Entity
            push :is_reference_inner
          end
          rule /([^"\$@\n\r]+(?!$))/, String::Single
          rule /(\n|\r|\r\n)/, String
          rule /./, String
      end

      state:refstr_all__17 do
          rule /([\$](?:[\da-fA-F]{2}|\([\da-fA-F]*\)|["'`znrt\$@]))|([\$].)/ do
            groups String::Escape, Generic::Error
          end
          rule /([@])([\(])(\s*)/ do
            groups Punctuation, Punctuation, String
            push :is_reference_paren__1
          end
          rule /([@])([\[])(\s*)/ do
            groups Punctuation, Punctuation, String
            push :is_reference_brack__1
          end
          rule /([@])([\w_\d]+|)/ do
            groups Punctuation, Name::Entity
            push :is_reference_inner
          end
          rule /([^\uff02\$@\n\r]+(?!$))/, String::Single
          rule /(\n|\r|\r\n)/, String
          rule /./, String
      end

      state:refstr_all__18 do
          rule /([\$](?:[\da-fA-F]{2}|\([\da-fA-F]*\)|["'`znrt\$@]))|([\$].)/ do
            groups String::Escape, Generic::Error
          end
          rule /([@])([\(])(\s*)/ do
            groups Punctuation, Punctuation, String
            push :is_reference_paren__1
          end
          rule /([@])([\[])(\s*)/ do
            groups Punctuation, Punctuation, String
            push :is_reference_brack__1
          end
          rule /([@])([\w_\d]+|)/ do
            groups Punctuation, Name::Entity
            push :is_reference_inner
          end
          rule /([^\u201c\u201d\$@\n\r]+(?!$))/, String::Single
          rule /(\n|\r|\r\n)/, String
          rule /./, String
      end

      state:refstr_all__19 do
          rule /([\$](?:[\da-fA-F]{2}|\([\da-fA-F]*\)|["'`znrt\$@]))|([\$].)/ do
            groups String::Escape, Generic::Error
          end
          rule /([@])([\(])(\s*)/ do
            groups Punctuation, Punctuation, String
            push :is_reference_paren__1
          end
          rule /([@])([\[])(\s*)/ do
            groups Punctuation, Punctuation, String
            push :is_reference_brack__1
          end
          rule /([@])([\w_\d]+|)/ do
            groups Punctuation, Name::Entity
            push :is_reference_inner
          end
          rule /([^\u201d\u201e\$@\n\r]+(?!$))/, String::Single
          rule /(\n|\r|\r\n)/, String
          rule /./, String
      end

      state:refstr_all__2 do
          rule /([\$](?:[\da-fA-F]{2}|\([\da-fA-F]*\)|["'`znrt\$@]))|([\$].)/ do
            groups String::Escape, Generic::Error
          end
          rule /([@])([\(])(\s*)/ do
            groups Punctuation, Punctuation, String
            push :is_reference_paren__1
          end
          rule /([@])([\[])(\s*)/ do
            groups Punctuation, Punctuation, String
            push :is_reference_brack__1
          end
          rule /([@])([\w_\d]+|)/ do
            groups Punctuation, Name::Entity
            push :is_reference_inner
          end
          rule /([^\uff07\$@\n\r]+(?!$))/, String::Single
          rule /(\n|\r|\r\n)/, String
          rule /./, String
      end

      state:refstr_all__20 do
          rule /([\$](?:[\da-fA-F]{2}|\([\da-fA-F]*\)|["'`znrt\$@]))|([\$].)/ do
            groups String::Escape, Generic::Error
          end
          rule /([@])([\(])(\s*)/ do
            groups Punctuation, Punctuation, String
            push :is_reference_paren__1
          end
          rule /([@])([\[])(\s*)/ do
            groups Punctuation, Punctuation, String
            push :is_reference_brack__1
          end
          rule /([@])([\w_\d]+|)/ do
            groups Punctuation, Name::Entity
            push :is_reference_inner
          end
          rule /([^\u275d\u275e\$@\n\r]+(?!$))/, String::Single
          rule /(\n|\r|\r\n)/, String
          rule /./, String
      end

      state:refstr_all__21 do
          rule /([\$](?:[\da-fA-F]{2}|\([\da-fA-F]*\)|["'`znrt\$@]))|([\$].)/ do
            groups String::Escape, Generic::Error
          end
          rule /([@])([\(])(\s*)/ do
            groups Punctuation, Punctuation, String
            push :is_reference_paren__1
          end
          rule /([@])([\[])(\s*)/ do
            groups Punctuation, Punctuation, String
            push :is_reference_brack__1
          end
          rule /([@])([\w_\d]+|)/ do
            groups Punctuation, Name::Entity
            push :is_reference_inner
          end
          rule /([^\u275e\u2760\$@\n\r]+(?!$))/, String::Single
          rule /(\n|\r|\r\n)/, String
          rule /./, String
      end

      state:refstr_all__22 do
          rule /([\$](?:[\da-fA-F]{2}|\([\da-fA-F]*\)|["'`znrt\$@]))|([\$].)/ do
            groups String::Escape, Generic::Error
          end
          rule /([@])([\(])(\s*)/ do
            groups Punctuation, Punctuation, String
            push :is_reference_paren__1
          end
          rule /([@])([\[])(\s*)/ do
            groups Punctuation, Punctuation, String
            push :is_reference_brack__1
          end
          rule /([@])([\w_\d]+|)/ do
            groups Punctuation, Name::Entity
            push :is_reference_inner
          end
          rule /([^\u{s1:4x}\u{s2:4x}\u{s1:4x}\u{s2:4x}\$@\n\r]+(?!$))/, String::Single
          rule /(\n|\r|\r\n)/, String
          rule /./, String
      end

      state:refstr_all__23 do
          rule /([\$](?:[\da-fA-F]{2}|\([\da-fA-F]*\)|["'`znrt\$@]))|([\$].)/ do
            groups String::Escape, Generic::Error
          end
          rule /([@])([\(])(\s*)/ do
            groups Punctuation, Punctuation, String
            push :is_reference_paren__1
          end
          rule /([@])([\[])(\s*)/ do
            groups Punctuation, Punctuation, String
            push :is_reference_brack__1
          end
          rule /([@])([\w_\d]+|)/ do
            groups Punctuation, Name::Entity
            push :is_reference_inner
          end
          rule /([^\u{s1:4x}\u{s2:4x}\u{s1:4x}\u{s2:4x}\$@\n\r]+(?!$))/, String::Single
          rule /(\n|\r|\r\n)/, String
          rule /./, String
      end

      state:refstr_all__24 do
          rule /([\$](?:[\da-fA-F]{2}|\([\da-fA-F]*\)|["'`znrt\$@]))|([\$].)/ do
            groups String::Escape, Generic::Error
          end
          rule /([@])([\(])(\s*)/ do
            groups Punctuation, Punctuation, String
            push :is_reference_paren__1
          end
          rule /([@])([\[])(\s*)/ do
            groups Punctuation, Punctuation, String
            push :is_reference_brack__1
          end
          rule /([@])([\w_\d]+|)/ do
            groups Punctuation, Name::Entity
            push :is_reference_inner
          end
          rule /([^\u201f\u201d\$@\n\r]+(?!$))/, String::Single
          rule /(\n|\r|\r\n)/, String
          rule /./, String
      end

      state:refstr_all__25 do
          rule /([\$](?:[\da-fA-F]{2}|\([\da-fA-F]*\)|["'`znrt\$@]))|([\$].)/ do
            groups String::Escape, Generic::Error
          end
          rule /([@])([\(])(\s*)/ do
            groups Punctuation, Punctuation, String
            push :is_reference_paren__1
          end
          rule /([@])([\[])(\s*)/ do
            groups Punctuation, Punctuation, String
            push :is_reference_brack__1
          end
          rule /([@])([\w_\d]+|)/ do
            groups Punctuation, Name::Entity
            push :is_reference_inner
          end
          rule /([^\u300f\$@\n\r]+(?!$))/, String::Single
          rule /(\n|\r|\r\n)/, String
          rule /./, String
      end

      state:refstr_all__26 do
          rule /([\$](?:[\da-fA-F]{2}|\([\da-fA-F]*\)|["'`znrt\$@]))|([\$].)/ do
            groups String::Escape, Generic::Error
          end
          rule /([@])([\(])(\s*)/ do
            groups Punctuation, Punctuation, String
            push :is_reference_paren__1
          end
          rule /([@])([\[])(\s*)/ do
            groups Punctuation, Punctuation, String
            push :is_reference_brack__1
          end
          rule /([@])([\w_\d]+|)/ do
            groups Punctuation, Name::Entity
            push :is_reference_inner
          end
          rule /([^\u300b\$@\n\r]+(?!$))/, String::Single
          rule /(\n|\r|\r\n)/, String
          rule /./, String
      end

      state:refstr_all__27 do
          rule /([\$](?:[\da-fA-F]{2}|\([\da-fA-F]*\)|["'`znrt\$@]))|([\$].)/ do
            groups String::Escape, Generic::Error
          end
          rule /([@])([\(])(\s*)/ do
            groups Punctuation, Punctuation, String
            push :is_reference_paren__1
          end
          rule /([@])([\[])(\s*)/ do
            groups Punctuation, Punctuation, String
            push :is_reference_brack__1
          end
          rule /([@])([\w_\d]+|)/ do
            groups Punctuation, Name::Entity
            push :is_reference_inner
          end
          rule /([^\u201c\u201d\$@\n\r]+(?!$))/, String::Single
          rule /(\n|\r|\r\n)/, String
          rule /./, String
      end

      state:refstr_all__28 do
          rule /([\$](?:[\da-fA-F]{2}|\([\da-fA-F]*\)|["'`znrt\$@]))|([\$].)/ do
            groups String::Escape, Generic::Error
          end
          rule /([@])([\(])(\s*)/ do
            groups Punctuation, Punctuation, String
            push :is_reference_paren__1
          end
          rule /([@])([\[])(\s*)/ do
            groups Punctuation, Punctuation, String
            push :is_reference_brack__1
          end
          rule /([@])([\w_\d]+|)/ do
            groups Punctuation, Name::Entity
            push :is_reference_inner
          end
          rule /([^\u275d\u275e\$@\n\r]+(?!$))/, String::Single
          rule /(\n|\r|\r\n)/, String
          rule /./, String
      end

      state:refstr_all__29 do
          rule /([\$](?:[\da-fA-F]{2}|\([\da-fA-F]*\)|["'`znrt\$@]))|([\$].)/ do
            groups String::Escape, Generic::Error
          end
          rule /([@])([\(])(\s*)/ do
            groups Punctuation, Punctuation, String
            push :is_reference_paren__1
          end
          rule /([@])([\[])(\s*)/ do
            groups Punctuation, Punctuation, String
            push :is_reference_brack__1
          end
          rule /([@])([\w_\d]+|)/ do
            groups Punctuation, Name::Entity
            push :is_reference_inner
          end
          rule /([^\u{s1:4x}\u{s2:4x}\u{s1:4x}\u{s2:4x}\$@\n\r]+(?!$))/, String::Single
          rule /(\n|\r|\r\n)/, String
          rule /./, String
      end

      state:refstr_all__3 do
          rule /([\$](?:[\da-fA-F]{2}|\([\da-fA-F]*\)|["'`znrt\$@]))|([\$].)/ do
            groups String::Escape, Generic::Error
          end
          rule /([@])([\(])(\s*)/ do
            groups Punctuation, Punctuation, String
            push :is_reference_paren__1
          end
          rule /([@])([\[])(\s*)/ do
            groups Punctuation, Punctuation, String
            push :is_reference_brack__1
          end
          rule /([@])([\w_\d]+|)/ do
            groups Punctuation, Name::Entity
            push :is_reference_inner
          end
          rule /([^\u2018\u2019\$@\n\r]+(?!$))/, String::Single
          rule /(\n|\r|\r\n)/, String
          rule /./, String
      end

      state:refstr_all__30 do
          rule /([\$](?:[\da-fA-F]{2}|\([\da-fA-F]*\)|["'`znrt\$@]))|([\$].)/ do
            groups String::Escape, Generic::Error
          end
          rule /([@])([\(])(\s*)/ do
            groups Punctuation, Punctuation, String
            push :is_reference_paren__1
          end
          rule /([@])([\[])(\s*)/ do
            groups Punctuation, Punctuation, String
            push :is_reference_brack__1
          end
          rule /([@])([\w_\d]+|)/ do
            groups Punctuation, Name::Entity
            push :is_reference_inner
          end
          rule /([^\u  bb\$@\n\r]+(?!$))/, String::Single
          rule /(\n|\r|\r\n)/, String
          rule /./, String
      end

      state:refstr_all__31 do
          rule /([\$](?:[\da-fA-F]{2}|\([\da-fA-F]*\)|["'`znrt\$@]))|([\$].)/ do
            groups String::Escape, Generic::Error
          end
          rule /([@])([\(])(\s*)/ do
            groups Punctuation, Punctuation, String
            push :is_reference_paren__1
          end
          rule /([@])([\[])(\s*)/ do
            groups Punctuation, Punctuation, String
            push :is_reference_brack__1
          end
          rule /([@])([\w_\d]+|)/ do
            groups Punctuation, Name::Entity
            push :is_reference_inner
          end
          rule /([^\u  ab\u  bb\$@\n\r]+(?!$))/, String::Single
          rule /(\n|\r|\r\n)/, String
          rule /./, String
      end

      state:refstr_all__4 do
          rule /([\$](?:[\da-fA-F]{2}|\([\da-fA-F]*\)|["'`znrt\$@]))|([\$].)/ do
            groups String::Escape, Generic::Error
          end
          rule /([@])([\(])(\s*)/ do
            groups Punctuation, Punctuation, String
            push :is_reference_paren__1
          end
          rule /([@])([\[])(\s*)/ do
            groups Punctuation, Punctuation, String
            push :is_reference_brack__1
          end
          rule /([@])([\w_\d]+|)/ do
            groups Punctuation, Name::Entity
            push :is_reference_inner
          end
          rule /([^\u2019\u2018\u201a\$@\n\r]+(?!$))/, String::Single
          rule /(\n|\r|\r\n)/, String
          rule /./, String
      end

      state:refstr_all__5 do
          rule /([\$](?:[\da-fA-F]{2}|\([\da-fA-F]*\)|["'`znrt\$@]))|([\$].)/ do
            groups String::Escape, Generic::Error
          end
          rule /([@])([\(])(\s*)/ do
            groups Punctuation, Punctuation, String
            push :is_reference_paren__1
          end
          rule /([@])([\[])(\s*)/ do
            groups Punctuation, Punctuation, String
            push :is_reference_brack__1
          end
          rule /([@])([\w_\d]+|)/ do
            groups Punctuation, Name::Entity
            push :is_reference_inner
          end
          rule /([^\u275b\u275c\$@\n\r]+(?!$))/, String::Single
          rule /(\n|\r|\r\n)/, String
          rule /./, String
      end

      state:refstr_all__6 do
          rule /([\$](?:[\da-fA-F]{2}|\([\da-fA-F]*\)|["'`znrt\$@]))|([\$].)/ do
            groups String::Escape, Generic::Error
          end
          rule /([@])([\(])(\s*)/ do
            groups Punctuation, Punctuation, String
            push :is_reference_paren__1
          end
          rule /([@])([\[])(\s*)/ do
            groups Punctuation, Punctuation, String
            push :is_reference_brack__1
          end
          rule /([@])([\w_\d]+|)/ do
            groups Punctuation, Name::Entity
            push :is_reference_inner
          end
          rule /([^\u275c\u275b\u275f\$@\n\r]+(?!$))/, String::Single
          rule /(\n|\r|\r\n)/, String
          rule /./, String
      end

      state:refstr_all__7 do
          rule /([\$](?:[\da-fA-F]{2}|\([\da-fA-F]*\)|["'`znrt\$@]))|([\$].)/ do
            groups String::Escape, Generic::Error
          end
          rule /([@])([\(])(\s*)/ do
            groups Punctuation, Punctuation, String
            push :is_reference_paren__1
          end
          rule /([@])([\[])(\s*)/ do
            groups Punctuation, Punctuation, String
            push :is_reference_brack__1
          end
          rule /([@])([\w_\d]+|)/ do
            groups Punctuation, Name::Entity
            push :is_reference_inner
          end
          rule /([^\u201b\u2019\$@\n\r]+(?!$))/, String::Single
          rule /(\n|\r|\r\n)/, String
          rule /./, String
      end

      state:refstr_all__8 do
          rule /([\$](?:[\da-fA-F]{2}|\([\da-fA-F]*\)|["'`znrt\$@]))|([\$].)/ do
            groups String::Escape, Generic::Error
          end
          rule /([@])([\(])(\s*)/ do
            groups Punctuation, Punctuation, String
            push :is_reference_paren__1
          end
          rule /([@])([\[])(\s*)/ do
            groups Punctuation, Punctuation, String
            push :is_reference_brack__1
          end
          rule /([@])([\w_\d]+|)/ do
            groups Punctuation, Name::Entity
            push :is_reference_inner
          end
          rule /([^\u300d\$@\n\r]+(?!$))/, String::Single
          rule /(\n|\r|\r\n)/, String
          rule /./, String
      end

      state:refstr_all__9 do
          rule /([\$](?:[\da-fA-F]{2}|\([\da-fA-F]*\)|["'`znrt\$@]))|([\$].)/ do
            groups String::Escape, Generic::Error
          end
          rule /([@])([\(])(\s*)/ do
            groups Punctuation, Punctuation, String
            push :is_reference_paren__1
          end
          rule /([@])([\[])(\s*)/ do
            groups Punctuation, Punctuation, String
            push :is_reference_brack__1
          end
          rule /([@])([\w_\d]+|)/ do
            groups Punctuation, Name::Entity
            push :is_reference_inner
          end
          rule /([^\u3009\$@\n\r]+(?!$))/, String::Single
          rule /(\n|\r|\r\n)/, String
          rule /./, String
      end

      state:string_all__1 do
          rule /([\$](?:[\da-fA-F]{2}|\([\da-fA-F]*\)|["'`znrt\$@]))|([\$].)/ do
            groups String::Escape, Generic::Error
          end
          rule /([^'\$\n\r]+(?!$))/, String::Single
          rule /(\n|\r|\r\n)/, String
          rule /./, String
      end

      state:string_all__10 do
          rule /([\$](?:[\da-fA-F]{2}|\([\da-fA-F]*\)|["'`znrt\$@]))|([\$].)/ do
            groups String::Escape, Generic::Error
          end
          rule /([^\u2019\u2018\$\n\r]+(?!$))/, String::Single
          rule /(\n|\r|\r\n)/, String
          rule /./, String
      end

      state:string_all__11 do
          rule /([\$](?:[\da-fA-F]{2}|\([\da-fA-F]*\)|["'`znrt\$@]))|([\$].)/ do
            groups String::Escape, Generic::Error
          end
          rule /([^\u275c\u275b\$\n\r]+(?!$))/, String::Single
          rule /(\n|\r|\r\n)/, String
          rule /./, String
      end

      state:string_all__12 do
          rule /([\$](?:[\da-fA-F]{2}|\([\da-fA-F]*\)|["'`znrt\$@]))|([\$].)/ do
            groups String::Escape, Generic::Error
          end
          rule /([^\u203a\$\n\r]+(?!$))/, String::Single
          rule /(\n|\r|\r\n)/, String
          rule /./, String
      end

      state:string_all__13 do
          rule /([\$](?:[\da-fA-F]{2}|\([\da-fA-F]*\)|["'`znrt\$@]))|([\$].)/ do
            groups String::Escape, Generic::Error
          end
          rule /([^\u2039\$\n\r]+(?!$))/, String::Single
          rule /(\n|\r|\r\n)/, String
          rule /./, String
      end

      state:string_all__14 do
          rule /([\$](?:[\da-fA-F]{2}|\([\da-fA-F]*\)|["'`znrt\$@]))|([\$].)/ do
            groups String::Escape, Generic::Error
          end
          rule /([^\u276f\$\n\r]+(?!$))/, String::Single
          rule /(\n|\r|\r\n)/, String
          rule /./, String
      end

      state:string_all__15 do
          rule /([\$](?:[\da-fA-F]{2}|\([\da-fA-F]*\)|["'`znrt\$@]))|([\$].)/ do
            groups String::Escape, Generic::Error
          end
          rule /([^\u276e\$\n\r]+(?!$))/, String::Single
          rule /(\n|\r|\r\n)/, String
          rule /./, String
      end

      state:string_all__16 do
          rule /([\$](?:[\da-fA-F]{2}|\([\da-fA-F]*\)|["'`znrt\$@]))|([\$].)/ do
            groups String::Escape, Generic::Error
          end
          rule /([^"\$\n\r]+(?!$))/, String::Single
          rule /(\n|\r|\r\n)/, String
          rule /./, String
      end

      state:string_all__17 do
          rule /([\$](?:[\da-fA-F]{2}|\([\da-fA-F]*\)|["'`znrt\$@]))|([\$].)/ do
            groups String::Escape, Generic::Error
          end
          rule /([^\uff02\$\n\r]+(?!$))/, String::Single
          rule /(\n|\r|\r\n)/, String
          rule /./, String
      end

      state:string_all__18 do
          rule /([\$](?:[\da-fA-F]{2}|\([\da-fA-F]*\)|["'`znrt\$@]))|([\$].)/ do
            groups String::Escape, Generic::Error
          end
          rule /([^\u201c\u201d\$\n\r]+(?!$))/, String::Single
          rule /(\n|\r|\r\n)/, String
          rule /./, String
      end

      state:string_all__19 do
          rule /([\$](?:[\da-fA-F]{2}|\([\da-fA-F]*\)|["'`znrt\$@]))|([\$].)/ do
            groups String::Escape, Generic::Error
          end
          rule /([^\u201d\u201e\$\n\r]+(?!$))/, String::Single
          rule /(\n|\r|\r\n)/, String
          rule /./, String
      end

      state:string_all__2 do
          rule /([\$](?:[\da-fA-F]{2}|\([\da-fA-F]*\)|["'`znrt\$@]))|([\$].)/ do
            groups String::Escape, Generic::Error
          end
          rule /([^\uff07\$\n\r]+(?!$))/, String::Single
          rule /(\n|\r|\r\n)/, String
          rule /./, String
      end

      state:string_all__20 do
          rule /([\$](?:[\da-fA-F]{2}|\([\da-fA-F]*\)|["'`znrt\$@]))|([\$].)/ do
            groups String::Escape, Generic::Error
          end
          rule /([^\u275d\u275e\$\n\r]+(?!$))/, String::Single
          rule /(\n|\r|\r\n)/, String
          rule /./, String
      end

      state:string_all__21 do
          rule /([\$](?:[\da-fA-F]{2}|\([\da-fA-F]*\)|["'`znrt\$@]))|([\$].)/ do
            groups String::Escape, Generic::Error
          end
          rule /([^\u275e\u2760\$\n\r]+(?!$))/, String::Single
          rule /(\n|\r|\r\n)/, String
          rule /./, String
      end

      state:string_all__22 do
          rule /([\$](?:[\da-fA-F]{2}|\([\da-fA-F]*\)|["'`znrt\$@]))|([\$].)/ do
            groups String::Escape, Generic::Error
          end
          rule /([^\u{s1:4x}\u{s2:4x}\u{s1:4x}\u{s2:4x}\$\n\r]+(?!$))/, String::Single
          rule /(\n|\r|\r\n)/, String
          rule /./, String
      end

      state:string_all__23 do
          rule /([\$](?:[\da-fA-F]{2}|\([\da-fA-F]*\)|["'`znrt\$@]))|([\$].)/ do
            groups String::Escape, Generic::Error
          end
          rule /([^\u{s1:4x}\u{s2:4x}\u{s1:4x}\u{s2:4x}\$\n\r]+(?!$))/, String::Single
          rule /(\n|\r|\r\n)/, String
          rule /./, String
      end

      state:string_all__24 do
          rule /([\$](?:[\da-fA-F]{2}|\([\da-fA-F]*\)|["'`znrt\$@]))|([\$].)/ do
            groups String::Escape, Generic::Error
          end
          rule /([^\u201f\u201d\$\n\r]+(?!$))/, String::Single
          rule /(\n|\r|\r\n)/, String
          rule /./, String
      end

      state:string_all__25 do
          rule /([\$](?:[\da-fA-F]{2}|\([\da-fA-F]*\)|["'`znrt\$@]))|([\$].)/ do
            groups String::Escape, Generic::Error
          end
          rule /([^\u300f\$\n\r]+(?!$))/, String::Single
          rule /(\n|\r|\r\n)/, String
          rule /./, String
      end

      state:string_all__26 do
          rule /([\$](?:[\da-fA-F]{2}|\([\da-fA-F]*\)|["'`znrt\$@]))|([\$].)/ do
            groups String::Escape, Generic::Error
          end
          rule /([^\u300b\$\n\r]+(?!$))/, String::Single
          rule /(\n|\r|\r\n)/, String
          rule /./, String
      end

      state:string_all__27 do
          rule /([\$](?:[\da-fA-F]{2}|\([\da-fA-F]*\)|["'`znrt\$@]))|([\$].)/ do
            groups String::Escape, Generic::Error
          end
          rule /([^\u201c\u201d\$\n\r]+(?!$))/, String::Single
          rule /(\n|\r|\r\n)/, String
          rule /./, String
      end

      state:string_all__28 do
          rule /([\$](?:[\da-fA-F]{2}|\([\da-fA-F]*\)|["'`znrt\$@]))|([\$].)/ do
            groups String::Escape, Generic::Error
          end
          rule /([^\u275d\u275e\$\n\r]+(?!$))/, String::Single
          rule /(\n|\r|\r\n)/, String
          rule /./, String
      end

      state:string_all__29 do
          rule /([\$](?:[\da-fA-F]{2}|\([\da-fA-F]*\)|["'`znrt\$@]))|([\$].)/ do
            groups String::Escape, Generic::Error
          end
          rule /([^\u{s1:4x}\u{s2:4x}\u{s1:4x}\u{s2:4x}\$\n\r]+(?!$))/, String::Single
          rule /(\n|\r|\r\n)/, String
          rule /./, String
      end

      state:string_all__3 do
          rule /([\$](?:[\da-fA-F]{2}|\([\da-fA-F]*\)|["'`znrt\$@]))|([\$].)/ do
            groups String::Escape, Generic::Error
          end
          rule /([^\u2018\u2019\$\n\r]+(?!$))/, String::Single
          rule /(\n|\r|\r\n)/, String
          rule /./, String
      end

      state:string_all__30 do
          rule /([\$](?:[\da-fA-F]{2}|\([\da-fA-F]*\)|["'`znrt\$@]))|([\$].)/ do
            groups String::Escape, Generic::Error
          end
          rule /([^\u  bb\$\n\r]+(?!$))/, String::Single
          rule /(\n|\r|\r\n)/, String
          rule /./, String
      end

      state:string_all__31 do
          rule /([\$](?:[\da-fA-F]{2}|\([\da-fA-F]*\)|["'`znrt\$@]))|([\$].)/ do
            groups String::Escape, Generic::Error
          end
          rule /([^\u  ab\u  bb\$\n\r]+(?!$))/, String::Single
          rule /(\n|\r|\r\n)/, String
          rule /./, String
      end

      state:string_all__4 do
          rule /([\$](?:[\da-fA-F]{2}|\([\da-fA-F]*\)|["'`znrt\$@]))|([\$].)/ do
            groups String::Escape, Generic::Error
          end
          rule /([^\u2019\u2018\u201a\$\n\r]+(?!$))/, String::Single
          rule /(\n|\r|\r\n)/, String
          rule /./, String
      end

      state:string_all__5 do
          rule /([\$](?:[\da-fA-F]{2}|\([\da-fA-F]*\)|["'`znrt\$@]))|([\$].)/ do
            groups String::Escape, Generic::Error
          end
          rule /([^\u275b\u275c\$\n\r]+(?!$))/, String::Single
          rule /(\n|\r|\r\n)/, String
          rule /./, String
      end

      state:string_all__6 do
          rule /([\$](?:[\da-fA-F]{2}|\([\da-fA-F]*\)|["'`znrt\$@]))|([\$].)/ do
            groups String::Escape, Generic::Error
          end
          rule /([^\u275c\u275b\u275f\$\n\r]+(?!$))/, String::Single
          rule /(\n|\r|\r\n)/, String
          rule /./, String
      end

      state:string_all__7 do
          rule /([\$](?:[\da-fA-F]{2}|\([\da-fA-F]*\)|["'`znrt\$@]))|([\$].)/ do
            groups String::Escape, Generic::Error
          end
          rule /([^\u201b\u2019\$\n\r]+(?!$))/, String::Single
          rule /(\n|\r|\r\n)/, String
          rule /./, String
      end

      state:string_all__8 do
          rule /([\$](?:[\da-fA-F]{2}|\([\da-fA-F]*\)|["'`znrt\$@]))|([\$].)/ do
            groups String::Escape, Generic::Error
          end
          rule /([^\u300d\$\n\r]+(?!$))/, String::Single
          rule /(\n|\r|\r\n)/, String
          rule /./, String
      end

      state:string_all__9 do
          rule /([\$](?:[\da-fA-F]{2}|\([\da-fA-F]*\)|["'`znrt\$@]))|([\$].)/ do
            groups String::Escape, Generic::Error
          end
          rule /([^\u3009\$\n\r]+(?!$))/, String::Single
          rule /(\n|\r|\r\n)/, String
          rule /./, String
      end

      state:struct_body__1 do
          rule /([#]+)(.*$)/ do
            groups Comment::Single, Comment::Single
          end
          rule /([:])/, Name::Attribute, :key_value_body
          rule /([#]+)(.*$)/ do
            groups Comment::Single, Comment::Single
          end
          rule /([@])(')/ do
            groups Punctuation, Punctuation
            push :refstr_all__1
          end
          rule /([@])(\uff07)/ do
            groups Punctuation, Punctuation
            push :refstr_all__2
          end
          rule /([@])(\u2018)/ do
            groups Punctuation, Punctuation
            push :refstr_all__3
          end
          rule /([@])(\u2019)/ do
            groups Punctuation, Punctuation
            push :refstr_all__4
          end
          rule /([@])(\u275b)/ do
            groups Punctuation, Punctuation
            push :refstr_all__5
          end
          rule /([@])(\u275c)/ do
            groups Punctuation, Punctuation
            push :refstr_all__6
          end
          rule /([@])(\u201b)/ do
            groups Punctuation, Punctuation
            push :refstr_all__7
          end
          rule /([@])(\u300c)/ do
            groups Punctuation, Punctuation
            push :refstr_all__8
          end
          rule /([@])(\u3008)/ do
            groups Punctuation, Punctuation
            push :refstr_all__9
          end
          rule /([@])(\u201a)/ do
            groups Punctuation, Punctuation
            push :refstr_all__10
          end
          rule /([@])(\u275f)/ do
            groups Punctuation, Punctuation
            push :refstr_all__11
          end
          rule /([@])(\u2039)/ do
            groups Punctuation, Punctuation
            push :refstr_all__12
          end
          rule /([@])(\u203a)/ do
            groups Punctuation, Punctuation
            push :refstr_all__13
          end
          rule /([@])(\u276e)/ do
            groups Punctuation, Punctuation
            push :refstr_all__14
          end
          rule /([@])(\u276f)/ do
            groups Punctuation, Punctuation
            push :refstr_all__15
          end
          rule /([@])(")/ do
            groups Punctuation, Punctuation
            push :refstr_all__16
          end
          rule /([@])(\uff02)/ do
            groups Punctuation, Punctuation
            push :refstr_all__17
          end
          rule /([@])(\u201c)/ do
            groups Punctuation, Punctuation
            push :refstr_all__18
          end
          rule /([@])(\u201d)/ do
            groups Punctuation, Punctuation
            push :refstr_all__19
          end
          rule /([@])(\u275d)/ do
            groups Punctuation, Punctuation
            push :refstr_all__20
          end
          rule /([@])(\u275e)/ do
            groups Punctuation, Punctuation
            push :refstr_all__21
          end
          rule /([@])(\u{s1:4x}\u{s2:4x})/ do
            groups Punctuation, Punctuation
            push :refstr_all__22
          end
          rule /([@])(\u{s1:4x}\u{s2:4x})/ do
            groups Punctuation, Punctuation
            push :refstr_all__23
          end
          rule /([@])(\u201f)/ do
            groups Punctuation, Punctuation
            push :refstr_all__24
          end
          rule /([@])(\u300e)/ do
            groups Punctuation, Punctuation
            push :refstr_all__25
          end
          rule /([@])(\u300a)/ do
            groups Punctuation, Punctuation
            push :refstr_all__26
          end
          rule /([@])(\u201e)/ do
            groups Punctuation, Punctuation
            push :refstr_all__27
          end
          rule /([@])(\u2760)/ do
            groups Punctuation, Punctuation
            push :refstr_all__28
          end
          rule /([@])(\u{s1:4x}\u{s2:4x})/ do
            groups Punctuation, Punctuation
            push :refstr_all__29
          end
          rule /([@])(\u  ab)/ do
            groups Punctuation, Punctuation
            push :refstr_all__30
          end
          rule /([@])(\u  bb)/ do
            groups Punctuation, Punctuation
            push :refstr_all__31
          end
          rule /(')/, Punctuation, :string_all__1
          rule /(\uff07)/, Punctuation, :string_all__2
          rule /(\u2018)/, Punctuation, :string_all__3
          rule /(\u2019)/, Punctuation, :string_all__4
          rule /(\u275b)/, Punctuation, :string_all__5
          rule /(\u275c)/, Punctuation, :string_all__6
          rule /(\u201b)/, Punctuation, :string_all__7
          rule /(\u300c)/, Punctuation, :string_all__8
          rule /(\u3008)/, Punctuation, :string_all__9
          rule /(\u201a)/, Punctuation, :string_all__10
          rule /(\u275f)/, Punctuation, :string_all__11
          rule /(\u2039)/, Punctuation, :string_all__12
          rule /(\u203a)/, Punctuation, :string_all__13
          rule /(\u276e)/, Punctuation, :string_all__14
          rule /(\u276f)/, Punctuation, :string_all__15
          rule /(")/, Punctuation, :string_all__16
          rule /(\uff02)/, Punctuation, :string_all__17
          rule /(\u201c)/, Punctuation, :string_all__18
          rule /(\u201d)/, Punctuation, :string_all__19
          rule /(\u275d)/, Punctuation, :string_all__20
          rule /(\u275e)/, Punctuation, :string_all__21
          rule /(\u{s1:4x}\u{s2:4x})/, Punctuation, :string_all__22
          rule /(\u{s1:4x}\u{s2:4x})/, Punctuation, :string_all__23
          rule /(\u201f)/, Punctuation, :string_all__24
          rule /(\u300e)/, Punctuation, :string_all__25
          rule /(\u300a)/, Punctuation, :string_all__26
          rule /(\u201e)/, Punctuation, :string_all__27
          rule /(\u2760)/, Punctuation, :string_all__28
          rule /(\u{s1:4x}\u{s2:4x})/, Punctuation, :string_all__29
          rule /(\u  ab)/, Punctuation, :string_all__30
          rule /(\u  bb)/, Punctuation, :string_all__31
          rule /([@])(--|[–—―])/ do
            groups Punctuation, Punctuation
            push :dash_refstring__1
          end
          rule /(--|[–—―])([\+])/ do
            groups Punctuation, Operator
            push :math_dash_string__1
          end
          rule /(--|[–—―])/, Punctuation, :dash_string__1
          rule /(?=[@][`])/, String, :refmultistr__1
          rule /([`]{3})([\+])/ do
            groups Punctuation, Operator
            push :math_quoted3__1
          end
          rule /([`])([\+])/ do
            groups Punctuation, Operator
            push :math_quoted1__1
          end
          rule /(?=[`])/, String, :multistr__1
          rule /([@])(\s*)([\(])/ do
            groups Punctuation, String, Punctuation
            push :reference_paren__1
          end
          rule /([@])(\s*)([\[])/ do
            groups Punctuation, String, Punctuation
            push :reference_brack__1
          end
          rule /([@])(\s*)(?:(this|g*parent|w*back|Defs)|([\w_\d]+)|)/ do
            groups Punctuation, String, Keyword, Name::Entity
            push :reference_inner
          end
          rule /(?:(\b\d+)|([\$][\da-fA-F]+))(\s*)([-~*+±]|\+-)(\s*)(?:(\b\d+)|([\$][\da-fA-F]+))/ do
            groups Number, Number::Hex, String, Operator, String, Number, Number::Hex
          end
          rule /(?:(\b\d+)|([\$][\da-fA-F]+))(?=\s*[:,#\)\]\}]|\s*$)/ do
            groups Number, Number
          end
          rule /(\b[a-z][a-z\d]*\s*[:])/, Name::Attribute, :key_value_body
          rule /([\[])/, Punctuation, :list__1
          rule /(ROM|RPL|rom|rpl)|(\b[a-z][a-z\d]*)/ do
            groups Keyword, Keyword::Type
          end
          rule /(\b[\w_\d]+)/, Name::Entity
          rule /([\{])/, Punctuation, :struct_body__1
          rule /(\n|\r|\r\n)/, String
          rule /./, String
      end

      state:subscript__1 do
          rule /([#]+)(.*$)/ do
            groups Comment::Single, Comment::Single
          end
          rule /(?=\S)(?![a-z][a-z\d]*\s*[\(\[\{])(?:(false|true|undefined|black|white|red|blue|green|yellow|magenta|pink|cyan|gray|grey|transparent|byte|short|long|double|LRUD|LRDU|RLUD|RLDU|UDLR|UDRL|DULR|DURL|LU|LD|RU|RD|UL|UR|DL|DR|big|little|(?:un)?signed|left|right|r?center|l?both|expand|\*)|([^:,#\(\[\{\)\]\}\n\r]+))/ do
            groups Keyword, String::Heredoc
          end
          rule /(\n|\r|\r\n)/, String
          rule /./, String
      end

      state:value_body do
          rule /([#]+)(.*$)/ do
            groups Comment::Single, Comment::Single
          end
          rule /([@])(')/ do
            groups Punctuation, Punctuation
            push :refstr_all__1
          end
          rule /([@])(\uff07)/ do
            groups Punctuation, Punctuation
            push :refstr_all__2
          end
          rule /([@])(\u2018)/ do
            groups Punctuation, Punctuation
            push :refstr_all__3
          end
          rule /([@])(\u2019)/ do
            groups Punctuation, Punctuation
            push :refstr_all__4
          end
          rule /([@])(\u275b)/ do
            groups Punctuation, Punctuation
            push :refstr_all__5
          end
          rule /([@])(\u275c)/ do
            groups Punctuation, Punctuation
            push :refstr_all__6
          end
          rule /([@])(\u201b)/ do
            groups Punctuation, Punctuation
            push :refstr_all__7
          end
          rule /([@])(\u300c)/ do
            groups Punctuation, Punctuation
            push :refstr_all__8
          end
          rule /([@])(\u3008)/ do
            groups Punctuation, Punctuation
            push :refstr_all__9
          end
          rule /([@])(\u201a)/ do
            groups Punctuation, Punctuation
            push :refstr_all__10
          end
          rule /([@])(\u275f)/ do
            groups Punctuation, Punctuation
            push :refstr_all__11
          end
          rule /([@])(\u2039)/ do
            groups Punctuation, Punctuation
            push :refstr_all__12
          end
          rule /([@])(\u203a)/ do
            groups Punctuation, Punctuation
            push :refstr_all__13
          end
          rule /([@])(\u276e)/ do
            groups Punctuation, Punctuation
            push :refstr_all__14
          end
          rule /([@])(\u276f)/ do
            groups Punctuation, Punctuation
            push :refstr_all__15
          end
          rule /([@])(")/ do
            groups Punctuation, Punctuation
            push :refstr_all__16
          end
          rule /([@])(\uff02)/ do
            groups Punctuation, Punctuation
            push :refstr_all__17
          end
          rule /([@])(\u201c)/ do
            groups Punctuation, Punctuation
            push :refstr_all__18
          end
          rule /([@])(\u201d)/ do
            groups Punctuation, Punctuation
            push :refstr_all__19
          end
          rule /([@])(\u275d)/ do
            groups Punctuation, Punctuation
            push :refstr_all__20
          end
          rule /([@])(\u275e)/ do
            groups Punctuation, Punctuation
            push :refstr_all__21
          end
          rule /([@])(\u{s1:4x}\u{s2:4x})/ do
            groups Punctuation, Punctuation
            push :refstr_all__22
          end
          rule /([@])(\u{s1:4x}\u{s2:4x})/ do
            groups Punctuation, Punctuation
            push :refstr_all__23
          end
          rule /([@])(\u201f)/ do
            groups Punctuation, Punctuation
            push :refstr_all__24
          end
          rule /([@])(\u300e)/ do
            groups Punctuation, Punctuation
            push :refstr_all__25
          end
          rule /([@])(\u300a)/ do
            groups Punctuation, Punctuation
            push :refstr_all__26
          end
          rule /([@])(\u201e)/ do
            groups Punctuation, Punctuation
            push :refstr_all__27
          end
          rule /([@])(\u2760)/ do
            groups Punctuation, Punctuation
            push :refstr_all__28
          end
          rule /([@])(\u{s1:4x}\u{s2:4x})/ do
            groups Punctuation, Punctuation
            push :refstr_all__29
          end
          rule /([@])(\u  ab)/ do
            groups Punctuation, Punctuation
            push :refstr_all__30
          end
          rule /([@])(\u  bb)/ do
            groups Punctuation, Punctuation
            push :refstr_all__31
          end
          rule /(')/, Punctuation, :string_all__1
          rule /(\uff07)/, Punctuation, :string_all__2
          rule /(\u2018)/, Punctuation, :string_all__3
          rule /(\u2019)/, Punctuation, :string_all__4
          rule /(\u275b)/, Punctuation, :string_all__5
          rule /(\u275c)/, Punctuation, :string_all__6
          rule /(\u201b)/, Punctuation, :string_all__7
          rule /(\u300c)/, Punctuation, :string_all__8
          rule /(\u3008)/, Punctuation, :string_all__9
          rule /(\u201a)/, Punctuation, :string_all__10
          rule /(\u275f)/, Punctuation, :string_all__11
          rule /(\u2039)/, Punctuation, :string_all__12
          rule /(\u203a)/, Punctuation, :string_all__13
          rule /(\u276e)/, Punctuation, :string_all__14
          rule /(\u276f)/, Punctuation, :string_all__15
          rule /(")/, Punctuation, :string_all__16
          rule /(\uff02)/, Punctuation, :string_all__17
          rule /(\u201c)/, Punctuation, :string_all__18
          rule /(\u201d)/, Punctuation, :string_all__19
          rule /(\u275d)/, Punctuation, :string_all__20
          rule /(\u275e)/, Punctuation, :string_all__21
          rule /(\u{s1:4x}\u{s2:4x})/, Punctuation, :string_all__22
          rule /(\u{s1:4x}\u{s2:4x})/, Punctuation, :string_all__23
          rule /(\u201f)/, Punctuation, :string_all__24
          rule /(\u300e)/, Punctuation, :string_all__25
          rule /(\u300a)/, Punctuation, :string_all__26
          rule /(\u201e)/, Punctuation, :string_all__27
          rule /(\u2760)/, Punctuation, :string_all__28
          rule /(\u{s1:4x}\u{s2:4x})/, Punctuation, :string_all__29
          rule /(\u  ab)/, Punctuation, :string_all__30
          rule /(\u  bb)/, Punctuation, :string_all__31
          rule /([@])(--|[–—―])/ do
            groups Punctuation, Punctuation
            push :dash_refstring__1
          end
          rule /(--|[–—―])([\+])/ do
            groups Punctuation, Operator
            push :math_dash_string__1
          end
          rule /(--|[–—―])/, Punctuation, :dash_string__1
          rule /(?=[@][`])/, String, :refmultistr__1
          rule /([`]{3})([\+])/ do
            groups Punctuation, Operator
            push :math_quoted3__1
          end
          rule /([`])([\+])/ do
            groups Punctuation, Operator
            push :math_quoted1__1
          end
          rule /(?=[`])/, String, :multistr__1
          rule /([@])(\s*)([\(])/ do
            groups Punctuation, String, Punctuation
            push :reference_paren__1
          end
          rule /([@])(\s*)([\[])/ do
            groups Punctuation, String, Punctuation
            push :reference_brack__1
          end
          rule /([@])(\s*)(?:(this|g*parent|w*back|Defs)|([\w_\d]+)|)/ do
            groups Punctuation, String, Keyword, Name::Entity
            push :reference_inner
          end
          rule /(?:(\b\d+)|([\$][\da-fA-F]+))(\s*)([-~*+±]|\+-)(\s*)(?:(\b\d+)|([\$][\da-fA-F]+))/ do
            groups Number, Number::Hex, String, Operator, String, Number, Number::Hex
          end
          rule /(?:(\b\d+)|([\$][\da-fA-F]+))(?=\s*[:,#\)\]\}]|\s*$)/ do
            groups Number, Number
          end
          rule /([\[])/, Punctuation, :list__1
          rule /([:])(\1?)/ do
            groups Punctuation, Punctuation
          end
          rule /([\+])/, Operator, :math_literal__1
          rule /(?=\S)(?![a-z][a-z\d]*\s*[\(\[\{])(?:(false|true|undefined|black|white|red|blue|green|yellow|magenta|pink|cyan|gray|grey|transparent|byte|short|long|double|LRUD|LRDU|RLUD|RLDU|UDLR|UDRL|DULR|DURL|LU|LD|RU|RD|UL|UR|DL|DR|big|little|(?:un)?signed|left|right|r?center|l?both|expand|\*)|([^:,#\(\[\{\)\]\}\n\r]+))/ do
            groups Keyword, String::Heredoc
          end
          rule /(\b[a-z][a-z\d]*)(?=\s*[\(])/, Keyword::Type, :value_struct_tp__1
          rule /(\b[a-z][a-z\d]*)(?=\s*[\[])/, Keyword::Type, :value_struct_tl__1
          rule /(\b[a-z][a-z\d]*)(?=\s*[\{])/, Keyword::Type, :value_struct_tb__1
          rule /(\n|\r|\r\n)/, String
          rule /./, String
      end

      state:value_struct_p__1 do
          rule /([\(])/, Punctuation, :value_body
          rule /(\n|\r|\r\n)/, String
          rule /./, String
      end

      state:value_struct_tb__1 do
          rule /([\{])/, Punctuation, :struct_body__1
          rule /(\n|\r|\r\n)/, String
          rule /./, String
      end

      state:value_struct_tl__1 do
          rule /([\[])/, Punctuation, :value_body
          rule /(\n|\r|\r\n)/, String
          rule /./, String
      end

      state:value_struct_tp__1 do
          rule /([\(])/, Punctuation, :value_body
          rule /(\n|\r|\r\n)/, String
          rule /./, String
      end

    end
  end
end
