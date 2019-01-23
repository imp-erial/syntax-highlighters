/*
* To try in Ace editor, copy and paste into the mode creator
* here : http://ace.c9.io/tool/mode_creator.html
*/

define(function(require, exports, module) {
"use strict";
var oop = require("../lib/oop");
var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;
/* --------------------- START ----------------------------- */
var RplHighlightRules = function() {
this.$rules = {
"start" : [
   {
      "token" : ["punctuation.definition.comment", "comment.line.number-sign"],
      "regex" : "([#]+)(.*$)"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(')",
      "push" : "refstr_all__1"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\uff07)",
      "push" : "refstr_all__2"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u2018)",
      "push" : "refstr_all__3"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u2019)",
      "push" : "refstr_all__4"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u275b)",
      "push" : "refstr_all__5"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u275c)",
      "push" : "refstr_all__6"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u201b)",
      "push" : "refstr_all__7"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u300c)",
      "push" : "refstr_all__8"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u3008)",
      "push" : "refstr_all__9"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u201a)",
      "push" : "refstr_all__10"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u275f)",
      "push" : "refstr_all__11"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u2039)",
      "push" : "refstr_all__12"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u203a)",
      "push" : "refstr_all__13"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u276e)",
      "push" : "refstr_all__14"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u276f)",
      "push" : "refstr_all__15"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\")",
      "push" : "refstr_all__16"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\uff02)",
      "push" : "refstr_all__17"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u201c)",
      "push" : "refstr_all__18"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u201d)",
      "push" : "refstr_all__19"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u275d)",
      "push" : "refstr_all__20"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u275e)",
      "push" : "refstr_all__21"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u{s1:4x}\\u{s2:4x})",
      "push" : "refstr_all__22"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u{s1:4x}\\u{s2:4x})",
      "push" : "refstr_all__23"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u201f)",
      "push" : "refstr_all__24"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u300e)",
      "push" : "refstr_all__25"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u300a)",
      "push" : "refstr_all__26"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u201e)",
      "push" : "refstr_all__27"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u2760)",
      "push" : "refstr_all__28"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u{s1:4x}\\u{s2:4x})",
      "push" : "refstr_all__29"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u  ab)",
      "push" : "refstr_all__30"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u  bb)",
      "push" : "refstr_all__31"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(')",
      "push" : "string_all__1"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\uff07)",
      "push" : "string_all__2"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u2018)",
      "push" : "string_all__3"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u2019)",
      "push" : "string_all__4"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u275b)",
      "push" : "string_all__5"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u275c)",
      "push" : "string_all__6"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u201b)",
      "push" : "string_all__7"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u300c)",
      "push" : "string_all__8"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u3008)",
      "push" : "string_all__9"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u201a)",
      "push" : "string_all__10"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u275f)",
      "push" : "string_all__11"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u2039)",
      "push" : "string_all__12"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u203a)",
      "push" : "string_all__13"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u276e)",
      "push" : "string_all__14"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u276f)",
      "push" : "string_all__15"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\")",
      "push" : "string_all__16"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\uff02)",
      "push" : "string_all__17"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u201c)",
      "push" : "string_all__18"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u201d)",
      "push" : "string_all__19"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u275d)",
      "push" : "string_all__20"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u275e)",
      "push" : "string_all__21"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u{s1:4x}\\u{s2:4x})",
      "push" : "string_all__22"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u{s1:4x}\\u{s2:4x})",
      "push" : "string_all__23"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u201f)",
      "push" : "string_all__24"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u300e)",
      "push" : "string_all__25"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u300a)",
      "push" : "string_all__26"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u201e)",
      "push" : "string_all__27"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u2760)",
      "push" : "string_all__28"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u{s1:4x}\\u{s2:4x})",
      "push" : "string_all__29"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u  ab)",
      "push" : "string_all__30"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u  bb)",
      "push" : "string_all__31"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(--|[\u2013\u2014\u2015])",
      "push" : "dash_refstring__1"
   },
   {
      "token" : ["punctuation.definition.string.begin", "keyword.operator"],
      "regex" : "(--|[\u2013\u2014\u2015])([\\+])",
      "push" : "math_dash_string__1"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(--|[\u2013\u2014\u2015])",
      "push" : "dash_string__1"
   },
   {
      "token" : "none",
      "regex" : "(?=[@][`])",
      "push" : "refmultistr__1"
   },
   {
      "token" : ["punctuation.definition.string.begin", "keyword.operator"],
      "regex" : "([`]{3})([\\+])",
      "push" : "math_quoted3__1"
   },
   {
      "token" : ["punctuation.definition.string.begin", "keyword.operator"],
      "regex" : "([`])([\\+])",
      "push" : "math_quoted1__1"
   },
   {
      "token" : "none",
      "regex" : "(?=[`])",
      "push" : "multistr__1"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "none", "meta.brace.round.rpl"],
      "regex" : "([@])(\\s*)([\\(])",
      "push" : "reference_paren__1"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "none", "meta.brace.square.rpl"],
      "regex" : "([@])(\\s*)([\\[])",
      "push" : "reference_brack__1"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "none", "variable.language", "entity.name.type"],
      "regex" : "([@])(\\s*)(?:(this|g*parent|w*back|Defs)|([\\w_\\d]+)|)",
      "push" : "reference_inner"
   },
   {
      "token" : ["constant.numeric.integer.decimal", "constant.numeric.integer.hexadecimal", "none", "keyword.operator.range", "none", "constant.numeric.integer.decimal", "constant.numeric.integer.hexadecimal"],
      "regex" : "(?:(\\b\\d+)|([\\$][\\da-fA-F]+))(\\s*)([-~*+\u00b1]|\\+-)(\\s*)(?:(\\b\\d+)|([\\$][\\da-fA-F]+))"
   },
   {
      "token" : ["constant.numeric.integer.decimal", "constant.numeric.integer.non-decimal"],
      "regex" : "(?:(\\b\\d+)|([\\$][\\da-fA-F]+))(?=\\s*[:,#\\)\\]\\}]|\\s*$)"
   },
   {
      "token" : "punctuation",
      "regex" : "([\\[])",
      "push" : "list__1"
   },
   {
      "token" : ["punctuation", "punctuation"],
      "regex" : "([:])(\\1?)"
   },
   {
      "token" : ["keyword", "storage.type"],
      "regex" : "(ROM|RPL|rom|rpl)|(\\b[a-z][a-z\\d]*)"
   },
   {
      "token" : "entity.name.type",
      "regex" : "(\\b[\\w_\\d]+)"
   },
   {
      "token" : "punctuation",
      "regex" : "([\\{])",
      "push" : "struct_body__1"
   },
   {
      defaultToken : "text",
   }
], 
"dash_refstring__1" : [
   {
      "token" : "comment.line.number-sign",
      "regex" : "(^(?=.{0,1})(?:|))",
      "next" : "pop"
   },
   {
      "token" : ["constant.character.escape", "invalid.illegal"],
      "regex" : "([\\$](?:[\\da-fA-F]{2}|\\([\\da-fA-F]*\\)|[\"'`znrt\\$@]))|([\\$].)"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "meta.brace.round.rpl", "none"],
      "regex" : "([@])([\\(])(\\s*)",
      "push" : "is_reference_paren__1"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "meta.brace.square.rpl", "none"],
      "regex" : "([@])([\\[])(\\s*)",
      "push" : "is_reference_brack__1"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "entity.name.type"],
      "regex" : "([@])([\\w_\\d]+|)",
      "push" : "is_reference_inner"
   },
   {
      "token" : "string.quoted",
      "regex" : "([^\\$@]+)"
   },
   {
      defaultToken : "text",
   }
], 
"dash_string__1" : [
   {
      "token" : "comment.line.number-sign",
      "regex" : "(^(?=.{0,1})(?:|))",
      "next" : "pop"
   },
   {
      "token" : ["constant.character.escape", "invalid.illegal"],
      "regex" : "([\\$](?:[\\da-fA-F]{2}|\\([\\da-fA-F]*\\)|[\"'`znrt\\$@]))|([\\$].)"
   },
   {
      "token" : "string.quoted",
      "regex" : "([^\\$]+)"
   },
   {
      defaultToken : "text",
   }
], 
"index__1" : [
   {
      "token" : "meta.brace.square.rpl",
      "regex" : "([\\]])",
      "next" : "pop"
   },
   {
      "token" : ["punctuation.definition.comment", "comment.line.number-sign"],
      "regex" : "([#]+)(.*$)"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(')",
      "push" : "refstr_all__1"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\uff07)",
      "push" : "refstr_all__2"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u2018)",
      "push" : "refstr_all__3"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u2019)",
      "push" : "refstr_all__4"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u275b)",
      "push" : "refstr_all__5"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u275c)",
      "push" : "refstr_all__6"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u201b)",
      "push" : "refstr_all__7"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u300c)",
      "push" : "refstr_all__8"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u3008)",
      "push" : "refstr_all__9"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u201a)",
      "push" : "refstr_all__10"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u275f)",
      "push" : "refstr_all__11"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u2039)",
      "push" : "refstr_all__12"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u203a)",
      "push" : "refstr_all__13"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u276e)",
      "push" : "refstr_all__14"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u276f)",
      "push" : "refstr_all__15"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\")",
      "push" : "refstr_all__16"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\uff02)",
      "push" : "refstr_all__17"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u201c)",
      "push" : "refstr_all__18"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u201d)",
      "push" : "refstr_all__19"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u275d)",
      "push" : "refstr_all__20"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u275e)",
      "push" : "refstr_all__21"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u{s1:4x}\\u{s2:4x})",
      "push" : "refstr_all__22"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u{s1:4x}\\u{s2:4x})",
      "push" : "refstr_all__23"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u201f)",
      "push" : "refstr_all__24"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u300e)",
      "push" : "refstr_all__25"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u300a)",
      "push" : "refstr_all__26"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u201e)",
      "push" : "refstr_all__27"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u2760)",
      "push" : "refstr_all__28"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u{s1:4x}\\u{s2:4x})",
      "push" : "refstr_all__29"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u  ab)",
      "push" : "refstr_all__30"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u  bb)",
      "push" : "refstr_all__31"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(')",
      "push" : "string_all__1"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\uff07)",
      "push" : "string_all__2"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u2018)",
      "push" : "string_all__3"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u2019)",
      "push" : "string_all__4"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u275b)",
      "push" : "string_all__5"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u275c)",
      "push" : "string_all__6"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u201b)",
      "push" : "string_all__7"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u300c)",
      "push" : "string_all__8"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u3008)",
      "push" : "string_all__9"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u201a)",
      "push" : "string_all__10"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u275f)",
      "push" : "string_all__11"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u2039)",
      "push" : "string_all__12"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u203a)",
      "push" : "string_all__13"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u276e)",
      "push" : "string_all__14"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u276f)",
      "push" : "string_all__15"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\")",
      "push" : "string_all__16"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\uff02)",
      "push" : "string_all__17"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u201c)",
      "push" : "string_all__18"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u201d)",
      "push" : "string_all__19"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u275d)",
      "push" : "string_all__20"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u275e)",
      "push" : "string_all__21"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u{s1:4x}\\u{s2:4x})",
      "push" : "string_all__22"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u{s1:4x}\\u{s2:4x})",
      "push" : "string_all__23"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u201f)",
      "push" : "string_all__24"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u300e)",
      "push" : "string_all__25"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u300a)",
      "push" : "string_all__26"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u201e)",
      "push" : "string_all__27"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u2760)",
      "push" : "string_all__28"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u{s1:4x}\\u{s2:4x})",
      "push" : "string_all__29"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u  ab)",
      "push" : "string_all__30"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u  bb)",
      "push" : "string_all__31"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(--|[\u2013\u2014\u2015])",
      "push" : "dash_refstring__1"
   },
   {
      "token" : ["punctuation.definition.string.begin", "keyword.operator"],
      "regex" : "(--|[\u2013\u2014\u2015])([\\+])",
      "push" : "math_dash_string__1"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(--|[\u2013\u2014\u2015])",
      "push" : "dash_string__1"
   },
   {
      "token" : "none",
      "regex" : "(?=[@][`])",
      "push" : "refmultistr__1"
   },
   {
      "token" : ["punctuation.definition.string.begin", "keyword.operator"],
      "regex" : "([`]{3})([\\+])",
      "push" : "math_quoted3__1"
   },
   {
      "token" : ["punctuation.definition.string.begin", "keyword.operator"],
      "regex" : "([`])([\\+])",
      "push" : "math_quoted1__1"
   },
   {
      "token" : "none",
      "regex" : "(?=[`])",
      "push" : "multistr__1"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "none", "meta.brace.round.rpl"],
      "regex" : "([@])(\\s*)([\\(])",
      "push" : "reference_paren__1"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "none", "meta.brace.square.rpl"],
      "regex" : "([@])(\\s*)([\\[])",
      "push" : "reference_brack__1"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "none", "variable.language", "entity.name.type"],
      "regex" : "([@])(\\s*)(?:(this|g*parent|w*back|Defs)|([\\w_\\d]+)|)",
      "push" : "reference_inner"
   },
   {
      "token" : ["constant.numeric.integer.decimal", "constant.numeric.integer.non-decimal"],
      "regex" : "(?:(\\b\\d+)|([\\$][\\da-fA-F]+))(?=\\s*[:,#\\)\\]\\}]|\\s*$)"
   },
   {
      "token" : "keyword.operator",
      "regex" : "([\\+])",
      "push" : "math_literal__1"
   },
   {
      "token" : ["keyword", "text.unquoted"],
      "regex" : "(?=\\S)(?![a-z][a-z\\d]*\\s*[\\(\\[\\{])(?:(false|true|undefined|black|white|red|blue|green|yellow|magenta|pink|cyan|gray|grey|transparent|byte|short|long|double|LRUD|LRDU|RLUD|RLDU|UDLR|UDRL|DULR|DURL|LU|LD|RU|RD|UL|UR|DL|DR|big|little|(?:un)?signed|left|right|r?center|l?both|expand|\\*)|([^:,#\\(\\[\\{\\)\\]\\}]+))"
   },
   {
      "token" : "storage.type",
      "regex" : "(\\b[a-z][a-z\\d]*)(?=\\s*[\\(])",
      "push" : "value_struct_tp__1"
   },
   {
      "token" : "storage.type",
      "regex" : "(\\b[a-z][a-z\\d]*)(?=\\s*[\\[])",
      "push" : "value_struct_tl__1"
   },
   {
      "token" : "storage.type",
      "regex" : "(\\b[a-z][a-z\\d]*)(?=\\s*[\\{])",
      "push" : "value_struct_tb__1"
   },
   {
      defaultToken : "text",
   }
], 
"is_index__1" : [
   {
      "token" : ["meta.brace.square.rpl", "invalid.illegal"],
      "regex" : "([\\]])|(?=.$)|(.(?=[\"']))",
      "next" : "pop"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "none", "meta.brace.round.rpl"],
      "regex" : "([@])(\\s*)([\\(])",
      "push" : "reference_paren__1"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "none", "meta.brace.square.rpl"],
      "regex" : "([@])(\\s*)([\\[])",
      "push" : "reference_brack__1"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "none", "variable.language", "entity.name.type"],
      "regex" : "([@])(\\s*)(?:(this|g*parent|w*back|Defs)|([\\w_\\d]+)|)",
      "push" : "reference_inner"
   },
   {
      "token" : ["constant.numeric.integer.decimal", "constant.numeric.integer.non-decimal"],
      "regex" : "(?:(\\b\\d+)|([\\$][\\da-fA-F]+))(?=\\s*[:,#\\)\\]\\}]|\\s*$)"
   },
   {
      "token" : "keyword.operator",
      "regex" : "([\\+])",
      "push" : "math_literal__1"
   },
   {
      "token" : ["keyword", "text.unquoted"],
      "regex" : "(?=\\S)(?![a-z][a-z\\d]*\\s*[\\(\\[\\{])(?:(false|true|undefined|black|white|red|blue|green|yellow|magenta|pink|cyan|gray|grey|transparent|byte|short|long|double|LRUD|LRDU|RLUD|RLDU|UDLR|UDRL|DULR|DURL|LU|LD|RU|RD|UL|UR|DL|DR|big|little|(?:un)?signed|left|right|r?center|l?both|expand|\\*)|([^:,#\\(\\[\\{\\)\\]\\}]+))"
   },
   {
      "token" : "storage.type",
      "regex" : "(\\b[a-z][a-z\\d]*)(?=\\s*[\\(])",
      "push" : "value_struct_tp__1"
   },
   {
      "token" : "storage.type",
      "regex" : "(\\b[a-z][a-z\\d]*)(?=\\s*[\\[])",
      "push" : "value_struct_tl__1"
   },
   {
      "token" : "storage.type",
      "regex" : "(\\b[a-z][a-z\\d]*)(?=\\s*[\\{])",
      "push" : "value_struct_tb__1"
   },
   {
      defaultToken : "text",
   }
], 
"is_reference_brack__1" : [
   {
      "token" : "meta.brace.square.rpl",
      "regex" : "(?:\\s*([\\]])|(?=.?$|[\"']))",
      "next" : "pop"
   },
   {
      "token" : "entity.name.type",
      "regex" : "([\\w_\\d]+|)",
      "push" : "is_reference_inner"
   },
   {
      defaultToken : "text",
   }
], 
"is_reference_inner" : [
   {
      "token" : ,
      "regex" : "(?!->|[\\[\\{.\\-\u2500])",
      "next" : "pop"
   },
   {
      "token" : ["invalid.illegal", "meta.brace.square.rpl"],
      "regex" : "([\\[](?=[\"']))|([\\[])",
      "push" : "is_index__1"
   },
   {
      "token" : ["invalid.illegal", "punctuation"],
      "regex" : "([\\{](?=[\"']))|([\\{])",
      "push" : "is_subscript__1"
   },
   {
      "token" : ["punctuation", "support.variable"],
      "regex" : "(->|[.\\-\u2500])([a-z][a-z\\d]*)"
   },
   {
      defaultToken : "text",
   }
], 
"is_reference_paren__1" : [
   {
      "token" : "meta.brace.round.rpl",
      "regex" : "(?:\\s*([\\)])|(?=.?$|[\"']))",
      "next" : "pop"
   },
   {
      "token" : "entity.name.type",
      "regex" : "([\\w_\\d]+|)",
      "push" : "is_reference_inner"
   },
   {
      defaultToken : "text",
   }
], 
"is_subscript__1" : [
   {
      "token" : ["punctuation", "invalid.illegal"],
      "regex" : "([\\}])|(?=.$)|(.(?=[\"']))",
      "next" : "pop"
   },
   {
      "token" : ["keyword", "text.unquoted"],
      "regex" : "(?=\\S)(?![a-z][a-z\\d]*\\s*[\\(\\[\\{])(?:(false|true|undefined|black|white|red|blue|green|yellow|magenta|pink|cyan|gray|grey|transparent|byte|short|long|double|LRUD|LRDU|RLUD|RLDU|UDLR|UDRL|DULR|DURL|LU|LD|RU|RD|UL|UR|DL|DR|big|little|(?:un)?signed|left|right|r?center|l?both|expand|\\*)|([^:,#\\(\\[\\{\\)\\]\\}]+))"
   },
   {
      defaultToken : "text",
   }
], 
"key_value_body" : [
   {
      "token" : "meta.delimiter.object.comma",
      "regex" : "([,]|(?=[\\}])|^(?=\\s*[^\\s:\\(\\[\\{]))",
      "next" : "pop"
   },
   {
      "token" : ["punctuation.definition.comment", "comment.line.number-sign"],
      "regex" : "([#]+)(.*$)"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(')",
      "push" : "refstr_all__1"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\uff07)",
      "push" : "refstr_all__2"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u2018)",
      "push" : "refstr_all__3"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u2019)",
      "push" : "refstr_all__4"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u275b)",
      "push" : "refstr_all__5"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u275c)",
      "push" : "refstr_all__6"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u201b)",
      "push" : "refstr_all__7"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u300c)",
      "push" : "refstr_all__8"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u3008)",
      "push" : "refstr_all__9"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u201a)",
      "push" : "refstr_all__10"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u275f)",
      "push" : "refstr_all__11"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u2039)",
      "push" : "refstr_all__12"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u203a)",
      "push" : "refstr_all__13"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u276e)",
      "push" : "refstr_all__14"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u276f)",
      "push" : "refstr_all__15"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\")",
      "push" : "refstr_all__16"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\uff02)",
      "push" : "refstr_all__17"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u201c)",
      "push" : "refstr_all__18"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u201d)",
      "push" : "refstr_all__19"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u275d)",
      "push" : "refstr_all__20"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u275e)",
      "push" : "refstr_all__21"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u{s1:4x}\\u{s2:4x})",
      "push" : "refstr_all__22"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u{s1:4x}\\u{s2:4x})",
      "push" : "refstr_all__23"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u201f)",
      "push" : "refstr_all__24"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u300e)",
      "push" : "refstr_all__25"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u300a)",
      "push" : "refstr_all__26"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u201e)",
      "push" : "refstr_all__27"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u2760)",
      "push" : "refstr_all__28"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u{s1:4x}\\u{s2:4x})",
      "push" : "refstr_all__29"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u  ab)",
      "push" : "refstr_all__30"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u  bb)",
      "push" : "refstr_all__31"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(')",
      "push" : "string_all__1"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\uff07)",
      "push" : "string_all__2"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u2018)",
      "push" : "string_all__3"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u2019)",
      "push" : "string_all__4"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u275b)",
      "push" : "string_all__5"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u275c)",
      "push" : "string_all__6"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u201b)",
      "push" : "string_all__7"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u300c)",
      "push" : "string_all__8"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u3008)",
      "push" : "string_all__9"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u201a)",
      "push" : "string_all__10"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u275f)",
      "push" : "string_all__11"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u2039)",
      "push" : "string_all__12"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u203a)",
      "push" : "string_all__13"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u276e)",
      "push" : "string_all__14"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u276f)",
      "push" : "string_all__15"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\")",
      "push" : "string_all__16"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\uff02)",
      "push" : "string_all__17"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u201c)",
      "push" : "string_all__18"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u201d)",
      "push" : "string_all__19"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u275d)",
      "push" : "string_all__20"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u275e)",
      "push" : "string_all__21"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u{s1:4x}\\u{s2:4x})",
      "push" : "string_all__22"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u{s1:4x}\\u{s2:4x})",
      "push" : "string_all__23"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u201f)",
      "push" : "string_all__24"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u300e)",
      "push" : "string_all__25"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u300a)",
      "push" : "string_all__26"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u201e)",
      "push" : "string_all__27"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u2760)",
      "push" : "string_all__28"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u{s1:4x}\\u{s2:4x})",
      "push" : "string_all__29"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u  ab)",
      "push" : "string_all__30"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u  bb)",
      "push" : "string_all__31"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(--|[\u2013\u2014\u2015])",
      "push" : "dash_refstring__1"
   },
   {
      "token" : ["punctuation.definition.string.begin", "keyword.operator"],
      "regex" : "(--|[\u2013\u2014\u2015])([\\+])",
      "push" : "math_dash_string__1"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(--|[\u2013\u2014\u2015])",
      "push" : "dash_string__1"
   },
   {
      "token" : "none",
      "regex" : "(?=[@][`])",
      "push" : "refmultistr__1"
   },
   {
      "token" : ["punctuation.definition.string.begin", "keyword.operator"],
      "regex" : "([`]{3})([\\+])",
      "push" : "math_quoted3__1"
   },
   {
      "token" : ["punctuation.definition.string.begin", "keyword.operator"],
      "regex" : "([`])([\\+])",
      "push" : "math_quoted1__1"
   },
   {
      "token" : "none",
      "regex" : "(?=[`])",
      "push" : "multistr__1"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "none", "meta.brace.round.rpl"],
      "regex" : "([@])(\\s*)([\\(])",
      "push" : "reference_paren__1"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "none", "meta.brace.square.rpl"],
      "regex" : "([@])(\\s*)([\\[])",
      "push" : "reference_brack__1"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "none", "variable.language", "entity.name.type"],
      "regex" : "([@])(\\s*)(?:(this|g*parent|w*back|Defs)|([\\w_\\d]+)|)",
      "push" : "reference_inner"
   },
   {
      "token" : ["constant.numeric.integer.decimal", "constant.numeric.integer.hexadecimal", "none", "keyword.operator.range", "none", "constant.numeric.integer.decimal", "constant.numeric.integer.hexadecimal"],
      "regex" : "(?:(\\b\\d+)|([\\$][\\da-fA-F]+))(\\s*)([-~*+\u00b1]|\\+-)(\\s*)(?:(\\b\\d+)|([\\$][\\da-fA-F]+))"
   },
   {
      "token" : ["constant.numeric.integer.decimal", "constant.numeric.integer.non-decimal"],
      "regex" : "(?:(\\b\\d+)|([\\$][\\da-fA-F]+))(?=\\s*[:,#\\)\\]\\}]|\\s*$)"
   },
   {
      "token" : "punctuation",
      "regex" : "([\\[])",
      "push" : "list__1"
   },
   {
      "token" : ["punctuation", "punctuation"],
      "regex" : "([:])(\\1?)"
   },
   {
      "token" : "keyword.operator",
      "regex" : "([\\+])",
      "push" : "math_literal__1"
   },
   {
      "token" : ["keyword", "text.unquoted"],
      "regex" : "(?=\\S)(?![a-z][a-z\\d]*\\s*[\\(\\[\\{])(?:(false|true|undefined|black|white|red|blue|green|yellow|magenta|pink|cyan|gray|grey|transparent|byte|short|long|double|LRUD|LRDU|RLUD|RLDU|UDLR|UDRL|DULR|DURL|LU|LD|RU|RD|UL|UR|DL|DR|big|little|(?:un)?signed|left|right|r?center|l?both|expand|\\*)|([^:,#\\(\\[\\{\\)\\]\\}]+))"
   },
   {
      "token" : "storage.type",
      "regex" : "(\\b[a-z][a-z\\d]*)(?=\\s*[\\(])",
      "push" : "value_struct_tp__1"
   },
   {
      "token" : "storage.type",
      "regex" : "(\\b[a-z][a-z\\d]*)(?=\\s*[\\[])",
      "push" : "value_struct_tl__1"
   },
   {
      "token" : "storage.type",
      "regex" : "(\\b[a-z][a-z\\d]*)(?=\\s*[\\{])",
      "push" : "value_struct_tb__1"
   },
   {
      "token" : "storage.type",
      "regex" : "(?=[\\(])",
      "push" : "value_struct_p__1"
   },
   {
      "token" : "punctuation",
      "regex" : "([\\{])",
      "push" : "struct_body__1"
   },
   {
      defaultToken : "text",
   }
], 
"list__1" : [
   {
      "token" : "punctuation",
      "regex" : "([\\]])",
      "next" : "pop"
   },
   {
      "token" : "none",
      "regex" : "(?=.)",
      "push" : "value_body"
   },
   {
      defaultToken : "text",
   }
], 
"math_dash_string__1" : [
   {
      "token" : "comment.line.number-sign",
      "regex" : "(^(?=.{0,1})(?:|))",
      "next" : "pop"
   },
   {
      "token" : "constant.numeric.integer.hexadecimal",
      "regex" : "((?:[\\$]{2}|[0]x)[\\da-fA-F]+)"
   },
   {
      "token" : "constant.numeric.integer.octal",
      "regex" : "([0]o[0-7]+)"
   },
   {
      "token" : "constant.numeric.integer.binary",
      "regex" : "((?:0b|%)[01]+)"
   },
   {
      "token" : "constant.numeric.integer.non-decimal",
      "regex" : "([\\d]+_[\\d]+)"
   },
   {
      "token" : "constant.numeric.integer.decimal",
      "regex" : "(\\b\\d+)"
   },
   {
      "token" : ["constant.character.escape", "invalid.illegal"],
      "regex" : "([\\$](?:[\\da-fA-F]{2}|\\([\\da-fA-F]*\\)|[\"'`znrt\\$@]))|([\\$].)"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\*\\*|<<|>>|[-+*/&|^%])"
   },
   {
      "token" : ["punctuation.definition.generic.begin", "punctuation.definition.generic.end"],
      "regex" : "([<])|([>])"
   },
   {
      "token" : "meta.brace.round.rpl",
      "regex" : "([\\(\\)])"
   },
   {
      defaultToken : "text",
   }
], 
"math_literal__1" : [
   {
      "token" : ,
      "regex" : "(?![^:,#\\(\\[\\{\\)\\]\\}])|(?=$)",
      "next" : "pop"
   },
   {
      "token" : "constant.numeric.integer.hexadecimal",
      "regex" : "((?:[\\$]{2}|[0]x)[\\da-fA-F]+)"
   },
   {
      "token" : "constant.numeric.integer.octal",
      "regex" : "([0]o[0-7]+)"
   },
   {
      "token" : "constant.numeric.integer.binary",
      "regex" : "((?:0b|%)[01]+)"
   },
   {
      "token" : "constant.numeric.integer.non-decimal",
      "regex" : "([\\d]+_[\\d]+)"
   },
   {
      "token" : "constant.numeric.integer.decimal",
      "regex" : "(\\b\\d+)"
   },
   {
      "token" : ["constant.character.escape", "invalid.illegal"],
      "regex" : "([\\$](?:[\\da-fA-F]{2}|\\([\\da-fA-F]*\\)|[\"'`znrt\\$@]))|([\\$].)"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\*\\*|<<|>>|[-+*/&|^%])"
   },
   {
      "token" : ["punctuation.definition.generic.begin", "punctuation.definition.generic.end"],
      "regex" : "([<])|([>])"
   },
   {
      defaultToken : "text",
   }
], 
"math_quoted1__1" : [
   {
      "token" : "punctuation.definition.string.end",
      "regex" : "([`])",
      "next" : "pop"
   },
   {
      "token" : "constant.numeric.integer.hexadecimal",
      "regex" : "((?:[\\$]{2}|[0]x)[\\da-fA-F]+)"
   },
   {
      "token" : "constant.numeric.integer.octal",
      "regex" : "([0]o[0-7]+)"
   },
   {
      "token" : "constant.numeric.integer.binary",
      "regex" : "((?:0b|%)[01]+)"
   },
   {
      "token" : "constant.numeric.integer.non-decimal",
      "regex" : "([\\d]+_[\\d]+)"
   },
   {
      "token" : "constant.numeric.integer.decimal",
      "regex" : "(\\b\\d+)"
   },
   {
      "token" : ["constant.character.escape", "invalid.illegal"],
      "regex" : "([\\$](?:[\\da-fA-F]{2}|\\([\\da-fA-F]*\\)|[\"'`znrt\\$@]))|([\\$].)"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\*\\*|<<|>>|[-+*/&|^%])"
   },
   {
      "token" : ["punctuation.definition.generic.begin", "punctuation.definition.generic.end"],
      "regex" : "([<])|([>])"
   },
   {
      "token" : "meta.brace.round.rpl",
      "regex" : "([\\(\\)])"
   },
   {
      defaultToken : "text",
   }
], 
"math_quoted3__1" : [
   {
      "token" : "punctuation.definition.string.end",
      "regex" : "([`]{3})",
      "next" : "pop"
   },
   {
      "token" : "constant.numeric.integer.hexadecimal",
      "regex" : "((?:[\\$]{2}|[0]x)[\\da-fA-F]+)"
   },
   {
      "token" : "constant.numeric.integer.octal",
      "regex" : "([0]o[0-7]+)"
   },
   {
      "token" : "constant.numeric.integer.binary",
      "regex" : "((?:0b|%)[01]+)"
   },
   {
      "token" : "constant.numeric.integer.non-decimal",
      "regex" : "([\\d]+_[\\d]+)"
   },
   {
      "token" : "constant.numeric.integer.decimal",
      "regex" : "(\\b\\d+)"
   },
   {
      "token" : ["constant.character.escape", "invalid.illegal"],
      "regex" : "([\\$](?:[\\da-fA-F]{2}|\\([\\da-fA-F]*\\)|[\"'`znrt\\$@]))|([\\$].)"
   },
   {
      "token" : "keyword.operator",
      "regex" : "(\\*\\*|<<|>>|[-+*/&|^%])"
   },
   {
      "token" : ["punctuation.definition.generic.begin", "punctuation.definition.generic.end"],
      "regex" : "([<])|([>])"
   },
   {
      "token" : "meta.brace.round.rpl",
      "regex" : "([\\(\\)])"
   },
   {
      defaultToken : "text",
   }
], 
"multistr_1__1" : [
   {
      "token" : "punctuation.definition.string.end",
      "regex" : "([`])",
      "next" : "pop"
   },
   {
      "token" : ["constant.character.escape", "invalid.illegal"],
      "regex" : "([\\$](?:[\\da-fA-F]{2}|\\([\\da-fA-F]*\\)|[\"'`znrt\\$@]))|([\\$].)"
   },
   {
      "token" : "string.quoted.single.block",
      "regex" : "([^`\\$]+)"
   },
   {
      defaultToken : "text",
   }
], 
"multistr_2__1" : [
   {
      "token" : "punctuation.definition.string.end",
      "regex" : "([`]{ 2 })",
      "next" : "pop"
   },
   {
      "token" : ["constant.character.escape", "invalid.illegal"],
      "regex" : "([\\$](?:[\\da-fA-F]{2}|\\([\\da-fA-F]*\\)|[\"'`znrt\\$@]))|([\\$].)"
   },
   {
      "token" : "string.quoted.single.block",
      "regex" : "([^`\\$]+)"
   },
   {
      defaultToken : "text",
   }
], 
"multistr_3__1" : [
   {
      "token" : "punctuation.definition.string.end",
      "regex" : "([`]{ 3 })",
      "next" : "pop"
   },
   {
      "token" : ["constant.character.escape", "invalid.illegal"],
      "regex" : "([\\$](?:[\\da-fA-F]{2}|\\([\\da-fA-F]*\\)|[\"'`znrt\\$@]))|([\\$].)"
   },
   {
      "token" : "string.quoted.single.block",
      "regex" : "([^`\\$]+)"
   },
   {
      defaultToken : "text",
   }
], 
"multistr__1" : [
   {
      "token" : "meta.delimiter.object.comma",
      "regex" : "([,]|^(?=\\s*[^#`]))",
      "next" : "pop"
   },
   {
      "token" : ["punctuation.definition.comment", "comment.line.number-sign"],
      "regex" : "([#]+)(.*$)"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "([`]{ 3 }(?![`]))",
      "push" : "multistr_3__1"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "([`]{ 2 }(?![`]))",
      "push" : "multistr_2__1"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "([`](?![`]))",
      "push" : "multistr_1__1"
   },
   {
      defaultToken : "text",
   }
], 
"reference_brack__1" : [
   {
      "token" : "meta.brace.square.rpl",
      "regex" : "([\\]])",
      "next" : "pop"
   },
   {
      "token" : ["variable.language", "entity.name.type"],
      "regex" : "(?:(this|g*parent|w*back|Defs)|([\\w_\\d]+)|)",
      "push" : "reference_inner"
   },
   {
      defaultToken : "text",
   }
], 
"reference_inner" : [
   {
      "token" : ,
      "regex" : "(?!->|[\\[\\{.\\-\u2500\\s#])",
      "next" : "pop"
   },
   {
      "token" : ["punctuation.definition.comment", "comment.line.number-sign"],
      "regex" : "([#]+)(.*$)"
   },
   {
      "token" : "meta.brace.square.rpl",
      "regex" : "([\\[])",
      "push" : "index__1"
   },
   {
      "token" : "punctuation",
      "regex" : "([\\{])",
      "push" : "subscript__1"
   },
   {
      "token" : "punctuation",
      "regex" : "(->|[.\\-\u2500])",
      "push" : "reference_key__1"
   },
   {
      defaultToken : "text",
   }
], 
"reference_key__1" : [
   {
      "token" : "support.variable",
      "regex" : "(\\b[a-z][a-z\\d]*)",
      "next" : "pop"
   },
   {
      "token" : ["punctuation.definition.comment", "comment.line.number-sign"],
      "regex" : "([#]+)(.*$)"
   },
   {
      defaultToken : "text",
   }
], 
"reference_paren__1" : [
   {
      "token" : "meta.brace.round.rpl",
      "regex" : "([\\)])",
      "next" : "pop"
   },
   {
      "token" : ["variable.language", "entity.name.type"],
      "regex" : "(?:(this|g*parent|w*back|Defs)|([\\w_\\d]+)|)",
      "push" : "reference_inner"
   },
   {
      defaultToken : "text",
   }
], 
"refmultistr_1__1" : [
   {
      "token" : "punctuation.definition.string.end",
      "regex" : "([`])",
      "next" : "pop"
   },
   {
      "token" : ["constant.character.escape", "invalid.illegal"],
      "regex" : "([\\$](?:[\\da-fA-F]{2}|\\([\\da-fA-F]*\\)|[\"'`znrt\\$@]))|([\\$].)"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "none", "meta.brace.round.rpl"],
      "regex" : "([@])(\\s*)([\\(])",
      "push" : "reference_paren__1"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "none", "meta.brace.square.rpl"],
      "regex" : "([@])(\\s*)([\\[])",
      "push" : "reference_brack__1"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "none", "variable.language", "entity.name.type"],
      "regex" : "([@])(\\s*)(?:(this|g*parent|w*back|Defs)|([\\w_\\d]+)|)",
      "push" : "reference_inner"
   },
   {
      "token" : "string.quoted.single.block",
      "regex" : "([^`\\$@]+)"
   },
   {
      defaultToken : "text",
   }
], 
"refmultistr_2__1" : [
   {
      "token" : "punctuation.definition.string.end",
      "regex" : "([`]{ 2 })",
      "next" : "pop"
   },
   {
      "token" : ["constant.character.escape", "invalid.illegal"],
      "regex" : "([\\$](?:[\\da-fA-F]{2}|\\([\\da-fA-F]*\\)|[\"'`znrt\\$@]))|([\\$].)"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "none", "meta.brace.round.rpl"],
      "regex" : "([@])(\\s*)([\\(])",
      "push" : "reference_paren__1"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "none", "meta.brace.square.rpl"],
      "regex" : "([@])(\\s*)([\\[])",
      "push" : "reference_brack__1"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "none", "variable.language", "entity.name.type"],
      "regex" : "([@])(\\s*)(?:(this|g*parent|w*back|Defs)|([\\w_\\d]+)|)",
      "push" : "reference_inner"
   },
   {
      "token" : "string.quoted.single.block",
      "regex" : "([^`\\$@]+)"
   },
   {
      defaultToken : "text",
   }
], 
"refmultistr_3__1" : [
   {
      "token" : "punctuation.definition.string.end",
      "regex" : "([`]{ 3 })",
      "next" : "pop"
   },
   {
      "token" : ["constant.character.escape", "invalid.illegal"],
      "regex" : "([\\$](?:[\\da-fA-F]{2}|\\([\\da-fA-F]*\\)|[\"'`znrt\\$@]))|([\\$].)"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "none", "meta.brace.round.rpl"],
      "regex" : "([@])(\\s*)([\\(])",
      "push" : "reference_paren__1"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "none", "meta.brace.square.rpl"],
      "regex" : "([@])(\\s*)([\\[])",
      "push" : "reference_brack__1"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "none", "variable.language", "entity.name.type"],
      "regex" : "([@])(\\s*)(?:(this|g*parent|w*back|Defs)|([\\w_\\d]+)|)",
      "push" : "reference_inner"
   },
   {
      "token" : "string.quoted.single.block",
      "regex" : "([^`\\$@]+)"
   },
   {
      defaultToken : "text",
   }
], 
"refmultistr__1" : [
   {
      "token" : "meta.delimiter.object.comma",
      "regex" : "([,]|^(?=\\s*(?![#`]|[@][`])))",
      "next" : "pop"
   },
   {
      "token" : ["punctuation.definition.comment", "comment.line.number-sign"],
      "regex" : "([#]+)(.*$)"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@]?)([`]{ 3 }(?![`]))",
      "push" : "refmultistr_3__1"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@]?)([`]{ 2 }(?![`]))",
      "push" : "refmultistr_2__1"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@]?)([`](?![`]))",
      "push" : "refmultistr_1__1"
   },
   {
      defaultToken : "text",
   }
], 
"refstr_all__1" : [
   {
      "token" : ["punctuation.definition.string.end", "invalid.illegal"],
      "regex" : "(['])|(.$)",
      "next" : "pop"
   },
   {
      "token" : ["constant.character.escape", "invalid.illegal"],
      "regex" : "([\\$](?:[\\da-fA-F]{2}|\\([\\da-fA-F]*\\)|[\"'`znrt\\$@]))|([\\$].)"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "meta.brace.round.rpl", "none"],
      "regex" : "([@])([\\(])(\\s*)",
      "push" : "is_reference_paren__1"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "meta.brace.square.rpl", "none"],
      "regex" : "([@])([\\[])(\\s*)",
      "push" : "is_reference_brack__1"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "entity.name.type"],
      "regex" : "([@])([\\w_\\d]+|)",
      "push" : "is_reference_inner"
   },
   {
      "token" : "string.quoted.single",
      "regex" : "([^'\\$@]+(?!$))"
   },
   {
      defaultToken : "text",
   }
], 
"refstr_all__10" : [
   {
      "token" : ["punctuation.definition.string.end", "invalid.illegal"],
      "regex" : "([\\u2019\\u2018])|(.$)",
      "next" : "pop"
   },
   {
      "token" : ["constant.character.escape", "invalid.illegal"],
      "regex" : "([\\$](?:[\\da-fA-F]{2}|\\([\\da-fA-F]*\\)|[\"'`znrt\\$@]))|([\\$].)"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "meta.brace.round.rpl", "none"],
      "regex" : "([@])([\\(])(\\s*)",
      "push" : "is_reference_paren__1"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "meta.brace.square.rpl", "none"],
      "regex" : "([@])([\\[])(\\s*)",
      "push" : "is_reference_brack__1"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "entity.name.type"],
      "regex" : "([@])([\\w_\\d]+|)",
      "push" : "is_reference_inner"
   },
   {
      "token" : "string.quoted.single",
      "regex" : "([^\\u2019\\u2018\\$@]+(?!$))"
   },
   {
      defaultToken : "text",
   }
], 
"refstr_all__11" : [
   {
      "token" : ["punctuation.definition.string.end", "invalid.illegal"],
      "regex" : "([\\u275c\\u275b])|(.$)",
      "next" : "pop"
   },
   {
      "token" : ["constant.character.escape", "invalid.illegal"],
      "regex" : "([\\$](?:[\\da-fA-F]{2}|\\([\\da-fA-F]*\\)|[\"'`znrt\\$@]))|([\\$].)"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "meta.brace.round.rpl", "none"],
      "regex" : "([@])([\\(])(\\s*)",
      "push" : "is_reference_paren__1"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "meta.brace.square.rpl", "none"],
      "regex" : "([@])([\\[])(\\s*)",
      "push" : "is_reference_brack__1"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "entity.name.type"],
      "regex" : "([@])([\\w_\\d]+|)",
      "push" : "is_reference_inner"
   },
   {
      "token" : "string.quoted.single",
      "regex" : "([^\\u275c\\u275b\\$@]+(?!$))"
   },
   {
      defaultToken : "text",
   }
], 
"refstr_all__12" : [
   {
      "token" : ["punctuation.definition.string.end", "invalid.illegal"],
      "regex" : "([\\u203a])|(.$)",
      "next" : "pop"
   },
   {
      "token" : ["constant.character.escape", "invalid.illegal"],
      "regex" : "([\\$](?:[\\da-fA-F]{2}|\\([\\da-fA-F]*\\)|[\"'`znrt\\$@]))|([\\$].)"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "meta.brace.round.rpl", "none"],
      "regex" : "([@])([\\(])(\\s*)",
      "push" : "is_reference_paren__1"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "meta.brace.square.rpl", "none"],
      "regex" : "([@])([\\[])(\\s*)",
      "push" : "is_reference_brack__1"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "entity.name.type"],
      "regex" : "([@])([\\w_\\d]+|)",
      "push" : "is_reference_inner"
   },
   {
      "token" : "string.quoted.single",
      "regex" : "([^\\u203a\\$@]+(?!$))"
   },
   {
      defaultToken : "text",
   }
], 
"refstr_all__13" : [
   {
      "token" : ["punctuation.definition.string.end", "invalid.illegal"],
      "regex" : "([\\u2039])|(.$)",
      "next" : "pop"
   },
   {
      "token" : ["constant.character.escape", "invalid.illegal"],
      "regex" : "([\\$](?:[\\da-fA-F]{2}|\\([\\da-fA-F]*\\)|[\"'`znrt\\$@]))|([\\$].)"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "meta.brace.round.rpl", "none"],
      "regex" : "([@])([\\(])(\\s*)",
      "push" : "is_reference_paren__1"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "meta.brace.square.rpl", "none"],
      "regex" : "([@])([\\[])(\\s*)",
      "push" : "is_reference_brack__1"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "entity.name.type"],
      "regex" : "([@])([\\w_\\d]+|)",
      "push" : "is_reference_inner"
   },
   {
      "token" : "string.quoted.single",
      "regex" : "([^\\u2039\\$@]+(?!$))"
   },
   {
      defaultToken : "text",
   }
], 
"refstr_all__14" : [
   {
      "token" : ["punctuation.definition.string.end", "invalid.illegal"],
      "regex" : "([\\u276f])|(.$)",
      "next" : "pop"
   },
   {
      "token" : ["constant.character.escape", "invalid.illegal"],
      "regex" : "([\\$](?:[\\da-fA-F]{2}|\\([\\da-fA-F]*\\)|[\"'`znrt\\$@]))|([\\$].)"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "meta.brace.round.rpl", "none"],
      "regex" : "([@])([\\(])(\\s*)",
      "push" : "is_reference_paren__1"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "meta.brace.square.rpl", "none"],
      "regex" : "([@])([\\[])(\\s*)",
      "push" : "is_reference_brack__1"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "entity.name.type"],
      "regex" : "([@])([\\w_\\d]+|)",
      "push" : "is_reference_inner"
   },
   {
      "token" : "string.quoted.single",
      "regex" : "([^\\u276f\\$@]+(?!$))"
   },
   {
      defaultToken : "text",
   }
], 
"refstr_all__15" : [
   {
      "token" : ["punctuation.definition.string.end", "invalid.illegal"],
      "regex" : "([\\u276e])|(.$)",
      "next" : "pop"
   },
   {
      "token" : ["constant.character.escape", "invalid.illegal"],
      "regex" : "([\\$](?:[\\da-fA-F]{2}|\\([\\da-fA-F]*\\)|[\"'`znrt\\$@]))|([\\$].)"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "meta.brace.round.rpl", "none"],
      "regex" : "([@])([\\(])(\\s*)",
      "push" : "is_reference_paren__1"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "meta.brace.square.rpl", "none"],
      "regex" : "([@])([\\[])(\\s*)",
      "push" : "is_reference_brack__1"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "entity.name.type"],
      "regex" : "([@])([\\w_\\d]+|)",
      "push" : "is_reference_inner"
   },
   {
      "token" : "string.quoted.single",
      "regex" : "([^\\u276e\\$@]+(?!$))"
   },
   {
      defaultToken : "text",
   }
], 
"refstr_all__16" : [
   {
      "token" : ["punctuation.definition.string.end", "invalid.illegal"],
      "regex" : "([\"])|(.$)",
      "next" : "pop"
   },
   {
      "token" : ["constant.character.escape", "invalid.illegal"],
      "regex" : "([\\$](?:[\\da-fA-F]{2}|\\([\\da-fA-F]*\\)|[\"'`znrt\\$@]))|([\\$].)"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "meta.brace.round.rpl", "none"],
      "regex" : "([@])([\\(])(\\s*)",
      "push" : "is_reference_paren__1"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "meta.brace.square.rpl", "none"],
      "regex" : "([@])([\\[])(\\s*)",
      "push" : "is_reference_brack__1"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "entity.name.type"],
      "regex" : "([@])([\\w_\\d]+|)",
      "push" : "is_reference_inner"
   },
   {
      "token" : "string.quoted.single",
      "regex" : "([^\"\\$@]+(?!$))"
   },
   {
      defaultToken : "text",
   }
], 
"refstr_all__17" : [
   {
      "token" : ["punctuation.definition.string.end", "invalid.illegal"],
      "regex" : "([\\uff02])|(.$)",
      "next" : "pop"
   },
   {
      "token" : ["constant.character.escape", "invalid.illegal"],
      "regex" : "([\\$](?:[\\da-fA-F]{2}|\\([\\da-fA-F]*\\)|[\"'`znrt\\$@]))|([\\$].)"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "meta.brace.round.rpl", "none"],
      "regex" : "([@])([\\(])(\\s*)",
      "push" : "is_reference_paren__1"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "meta.brace.square.rpl", "none"],
      "regex" : "([@])([\\[])(\\s*)",
      "push" : "is_reference_brack__1"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "entity.name.type"],
      "regex" : "([@])([\\w_\\d]+|)",
      "push" : "is_reference_inner"
   },
   {
      "token" : "string.quoted.single",
      "regex" : "([^\\uff02\\$@]+(?!$))"
   },
   {
      defaultToken : "text",
   }
], 
"refstr_all__18" : [
   {
      "token" : ["punctuation.definition.string.end", "invalid.illegal"],
      "regex" : "([\\u201c\\u201d])|(.$)",
      "next" : "pop"
   },
   {
      "token" : ["constant.character.escape", "invalid.illegal"],
      "regex" : "([\\$](?:[\\da-fA-F]{2}|\\([\\da-fA-F]*\\)|[\"'`znrt\\$@]))|([\\$].)"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "meta.brace.round.rpl", "none"],
      "regex" : "([@])([\\(])(\\s*)",
      "push" : "is_reference_paren__1"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "meta.brace.square.rpl", "none"],
      "regex" : "([@])([\\[])(\\s*)",
      "push" : "is_reference_brack__1"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "entity.name.type"],
      "regex" : "([@])([\\w_\\d]+|)",
      "push" : "is_reference_inner"
   },
   {
      "token" : "string.quoted.single",
      "regex" : "([^\\u201c\\u201d\\$@]+(?!$))"
   },
   {
      defaultToken : "text",
   }
], 
"refstr_all__19" : [
   {
      "token" : ["punctuation.definition.string.end", "invalid.illegal"],
      "regex" : "([\\u201d\\u201e])|(.$)",
      "next" : "pop"
   },
   {
      "token" : ["constant.character.escape", "invalid.illegal"],
      "regex" : "([\\$](?:[\\da-fA-F]{2}|\\([\\da-fA-F]*\\)|[\"'`znrt\\$@]))|([\\$].)"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "meta.brace.round.rpl", "none"],
      "regex" : "([@])([\\(])(\\s*)",
      "push" : "is_reference_paren__1"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "meta.brace.square.rpl", "none"],
      "regex" : "([@])([\\[])(\\s*)",
      "push" : "is_reference_brack__1"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "entity.name.type"],
      "regex" : "([@])([\\w_\\d]+|)",
      "push" : "is_reference_inner"
   },
   {
      "token" : "string.quoted.single",
      "regex" : "([^\\u201d\\u201e\\$@]+(?!$))"
   },
   {
      defaultToken : "text",
   }
], 
"refstr_all__2" : [
   {
      "token" : ["punctuation.definition.string.end", "invalid.illegal"],
      "regex" : "([\\uff07])|(.$)",
      "next" : "pop"
   },
   {
      "token" : ["constant.character.escape", "invalid.illegal"],
      "regex" : "([\\$](?:[\\da-fA-F]{2}|\\([\\da-fA-F]*\\)|[\"'`znrt\\$@]))|([\\$].)"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "meta.brace.round.rpl", "none"],
      "regex" : "([@])([\\(])(\\s*)",
      "push" : "is_reference_paren__1"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "meta.brace.square.rpl", "none"],
      "regex" : "([@])([\\[])(\\s*)",
      "push" : "is_reference_brack__1"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "entity.name.type"],
      "regex" : "([@])([\\w_\\d]+|)",
      "push" : "is_reference_inner"
   },
   {
      "token" : "string.quoted.single",
      "regex" : "([^\\uff07\\$@]+(?!$))"
   },
   {
      defaultToken : "text",
   }
], 
"refstr_all__20" : [
   {
      "token" : ["punctuation.definition.string.end", "invalid.illegal"],
      "regex" : "([\\u275d\\u275e])|(.$)",
      "next" : "pop"
   },
   {
      "token" : ["constant.character.escape", "invalid.illegal"],
      "regex" : "([\\$](?:[\\da-fA-F]{2}|\\([\\da-fA-F]*\\)|[\"'`znrt\\$@]))|([\\$].)"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "meta.brace.round.rpl", "none"],
      "regex" : "([@])([\\(])(\\s*)",
      "push" : "is_reference_paren__1"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "meta.brace.square.rpl", "none"],
      "regex" : "([@])([\\[])(\\s*)",
      "push" : "is_reference_brack__1"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "entity.name.type"],
      "regex" : "([@])([\\w_\\d]+|)",
      "push" : "is_reference_inner"
   },
   {
      "token" : "string.quoted.single",
      "regex" : "([^\\u275d\\u275e\\$@]+(?!$))"
   },
   {
      defaultToken : "text",
   }
], 
"refstr_all__21" : [
   {
      "token" : ["punctuation.definition.string.end", "invalid.illegal"],
      "regex" : "([\\u275e\\u2760])|(.$)",
      "next" : "pop"
   },
   {
      "token" : ["constant.character.escape", "invalid.illegal"],
      "regex" : "([\\$](?:[\\da-fA-F]{2}|\\([\\da-fA-F]*\\)|[\"'`znrt\\$@]))|([\\$].)"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "meta.brace.round.rpl", "none"],
      "regex" : "([@])([\\(])(\\s*)",
      "push" : "is_reference_paren__1"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "meta.brace.square.rpl", "none"],
      "regex" : "([@])([\\[])(\\s*)",
      "push" : "is_reference_brack__1"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "entity.name.type"],
      "regex" : "([@])([\\w_\\d]+|)",
      "push" : "is_reference_inner"
   },
   {
      "token" : "string.quoted.single",
      "regex" : "([^\\u275e\\u2760\\$@]+(?!$))"
   },
   {
      defaultToken : "text",
   }
], 
"refstr_all__22" : [
   {
      "token" : ["punctuation.definition.string.end", "invalid.illegal"],
      "regex" : "([\\u{s1:4x}\\u{s2:4x}\\u{s1:4x}\\u{s2:4x}])|(.$)",
      "next" : "pop"
   },
   {
      "token" : ["constant.character.escape", "invalid.illegal"],
      "regex" : "([\\$](?:[\\da-fA-F]{2}|\\([\\da-fA-F]*\\)|[\"'`znrt\\$@]))|([\\$].)"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "meta.brace.round.rpl", "none"],
      "regex" : "([@])([\\(])(\\s*)",
      "push" : "is_reference_paren__1"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "meta.brace.square.rpl", "none"],
      "regex" : "([@])([\\[])(\\s*)",
      "push" : "is_reference_brack__1"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "entity.name.type"],
      "regex" : "([@])([\\w_\\d]+|)",
      "push" : "is_reference_inner"
   },
   {
      "token" : "string.quoted.single",
      "regex" : "([^\\u{s1:4x}\\u{s2:4x}\\u{s1:4x}\\u{s2:4x}\\$@]+(?!$))"
   },
   {
      defaultToken : "text",
   }
], 
"refstr_all__23" : [
   {
      "token" : ["punctuation.definition.string.end", "invalid.illegal"],
      "regex" : "([\\u{s1:4x}\\u{s2:4x}\\u{s1:4x}\\u{s2:4x}])|(.$)",
      "next" : "pop"
   },
   {
      "token" : ["constant.character.escape", "invalid.illegal"],
      "regex" : "([\\$](?:[\\da-fA-F]{2}|\\([\\da-fA-F]*\\)|[\"'`znrt\\$@]))|([\\$].)"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "meta.brace.round.rpl", "none"],
      "regex" : "([@])([\\(])(\\s*)",
      "push" : "is_reference_paren__1"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "meta.brace.square.rpl", "none"],
      "regex" : "([@])([\\[])(\\s*)",
      "push" : "is_reference_brack__1"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "entity.name.type"],
      "regex" : "([@])([\\w_\\d]+|)",
      "push" : "is_reference_inner"
   },
   {
      "token" : "string.quoted.single",
      "regex" : "([^\\u{s1:4x}\\u{s2:4x}\\u{s1:4x}\\u{s2:4x}\\$@]+(?!$))"
   },
   {
      defaultToken : "text",
   }
], 
"refstr_all__24" : [
   {
      "token" : ["punctuation.definition.string.end", "invalid.illegal"],
      "regex" : "([\\u201f\\u201d])|(.$)",
      "next" : "pop"
   },
   {
      "token" : ["constant.character.escape", "invalid.illegal"],
      "regex" : "([\\$](?:[\\da-fA-F]{2}|\\([\\da-fA-F]*\\)|[\"'`znrt\\$@]))|([\\$].)"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "meta.brace.round.rpl", "none"],
      "regex" : "([@])([\\(])(\\s*)",
      "push" : "is_reference_paren__1"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "meta.brace.square.rpl", "none"],
      "regex" : "([@])([\\[])(\\s*)",
      "push" : "is_reference_brack__1"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "entity.name.type"],
      "regex" : "([@])([\\w_\\d]+|)",
      "push" : "is_reference_inner"
   },
   {
      "token" : "string.quoted.single",
      "regex" : "([^\\u201f\\u201d\\$@]+(?!$))"
   },
   {
      defaultToken : "text",
   }
], 
"refstr_all__25" : [
   {
      "token" : ["punctuation.definition.string.end", "invalid.illegal"],
      "regex" : "([\\u300f])|(.$)",
      "next" : "pop"
   },
   {
      "token" : ["constant.character.escape", "invalid.illegal"],
      "regex" : "([\\$](?:[\\da-fA-F]{2}|\\([\\da-fA-F]*\\)|[\"'`znrt\\$@]))|([\\$].)"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "meta.brace.round.rpl", "none"],
      "regex" : "([@])([\\(])(\\s*)",
      "push" : "is_reference_paren__1"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "meta.brace.square.rpl", "none"],
      "regex" : "([@])([\\[])(\\s*)",
      "push" : "is_reference_brack__1"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "entity.name.type"],
      "regex" : "([@])([\\w_\\d]+|)",
      "push" : "is_reference_inner"
   },
   {
      "token" : "string.quoted.single",
      "regex" : "([^\\u300f\\$@]+(?!$))"
   },
   {
      defaultToken : "text",
   }
], 
"refstr_all__26" : [
   {
      "token" : ["punctuation.definition.string.end", "invalid.illegal"],
      "regex" : "([\\u300b])|(.$)",
      "next" : "pop"
   },
   {
      "token" : ["constant.character.escape", "invalid.illegal"],
      "regex" : "([\\$](?:[\\da-fA-F]{2}|\\([\\da-fA-F]*\\)|[\"'`znrt\\$@]))|([\\$].)"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "meta.brace.round.rpl", "none"],
      "regex" : "([@])([\\(])(\\s*)",
      "push" : "is_reference_paren__1"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "meta.brace.square.rpl", "none"],
      "regex" : "([@])([\\[])(\\s*)",
      "push" : "is_reference_brack__1"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "entity.name.type"],
      "regex" : "([@])([\\w_\\d]+|)",
      "push" : "is_reference_inner"
   },
   {
      "token" : "string.quoted.single",
      "regex" : "([^\\u300b\\$@]+(?!$))"
   },
   {
      defaultToken : "text",
   }
], 
"refstr_all__27" : [
   {
      "token" : ["punctuation.definition.string.end", "invalid.illegal"],
      "regex" : "([\\u201c\\u201d])|(.$)",
      "next" : "pop"
   },
   {
      "token" : ["constant.character.escape", "invalid.illegal"],
      "regex" : "([\\$](?:[\\da-fA-F]{2}|\\([\\da-fA-F]*\\)|[\"'`znrt\\$@]))|([\\$].)"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "meta.brace.round.rpl", "none"],
      "regex" : "([@])([\\(])(\\s*)",
      "push" : "is_reference_paren__1"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "meta.brace.square.rpl", "none"],
      "regex" : "([@])([\\[])(\\s*)",
      "push" : "is_reference_brack__1"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "entity.name.type"],
      "regex" : "([@])([\\w_\\d]+|)",
      "push" : "is_reference_inner"
   },
   {
      "token" : "string.quoted.single",
      "regex" : "([^\\u201c\\u201d\\$@]+(?!$))"
   },
   {
      defaultToken : "text",
   }
], 
"refstr_all__28" : [
   {
      "token" : ["punctuation.definition.string.end", "invalid.illegal"],
      "regex" : "([\\u275d\\u275e])|(.$)",
      "next" : "pop"
   },
   {
      "token" : ["constant.character.escape", "invalid.illegal"],
      "regex" : "([\\$](?:[\\da-fA-F]{2}|\\([\\da-fA-F]*\\)|[\"'`znrt\\$@]))|([\\$].)"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "meta.brace.round.rpl", "none"],
      "regex" : "([@])([\\(])(\\s*)",
      "push" : "is_reference_paren__1"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "meta.brace.square.rpl", "none"],
      "regex" : "([@])([\\[])(\\s*)",
      "push" : "is_reference_brack__1"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "entity.name.type"],
      "regex" : "([@])([\\w_\\d]+|)",
      "push" : "is_reference_inner"
   },
   {
      "token" : "string.quoted.single",
      "regex" : "([^\\u275d\\u275e\\$@]+(?!$))"
   },
   {
      defaultToken : "text",
   }
], 
"refstr_all__29" : [
   {
      "token" : ["punctuation.definition.string.end", "invalid.illegal"],
      "regex" : "([\\u{s1:4x}\\u{s2:4x}\\u{s1:4x}\\u{s2:4x}])|(.$)",
      "next" : "pop"
   },
   {
      "token" : ["constant.character.escape", "invalid.illegal"],
      "regex" : "([\\$](?:[\\da-fA-F]{2}|\\([\\da-fA-F]*\\)|[\"'`znrt\\$@]))|([\\$].)"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "meta.brace.round.rpl", "none"],
      "regex" : "([@])([\\(])(\\s*)",
      "push" : "is_reference_paren__1"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "meta.brace.square.rpl", "none"],
      "regex" : "([@])([\\[])(\\s*)",
      "push" : "is_reference_brack__1"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "entity.name.type"],
      "regex" : "([@])([\\w_\\d]+|)",
      "push" : "is_reference_inner"
   },
   {
      "token" : "string.quoted.single",
      "regex" : "([^\\u{s1:4x}\\u{s2:4x}\\u{s1:4x}\\u{s2:4x}\\$@]+(?!$))"
   },
   {
      defaultToken : "text",
   }
], 
"refstr_all__3" : [
   {
      "token" : ["punctuation.definition.string.end", "invalid.illegal"],
      "regex" : "([\\u2018\\u2019])|(.$)",
      "next" : "pop"
   },
   {
      "token" : ["constant.character.escape", "invalid.illegal"],
      "regex" : "([\\$](?:[\\da-fA-F]{2}|\\([\\da-fA-F]*\\)|[\"'`znrt\\$@]))|([\\$].)"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "meta.brace.round.rpl", "none"],
      "regex" : "([@])([\\(])(\\s*)",
      "push" : "is_reference_paren__1"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "meta.brace.square.rpl", "none"],
      "regex" : "([@])([\\[])(\\s*)",
      "push" : "is_reference_brack__1"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "entity.name.type"],
      "regex" : "([@])([\\w_\\d]+|)",
      "push" : "is_reference_inner"
   },
   {
      "token" : "string.quoted.single",
      "regex" : "([^\\u2018\\u2019\\$@]+(?!$))"
   },
   {
      defaultToken : "text",
   }
], 
"refstr_all__30" : [
   {
      "token" : ["punctuation.definition.string.end", "invalid.illegal"],
      "regex" : "([\\u  bb])|(.$)",
      "next" : "pop"
   },
   {
      "token" : ["constant.character.escape", "invalid.illegal"],
      "regex" : "([\\$](?:[\\da-fA-F]{2}|\\([\\da-fA-F]*\\)|[\"'`znrt\\$@]))|([\\$].)"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "meta.brace.round.rpl", "none"],
      "regex" : "([@])([\\(])(\\s*)",
      "push" : "is_reference_paren__1"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "meta.brace.square.rpl", "none"],
      "regex" : "([@])([\\[])(\\s*)",
      "push" : "is_reference_brack__1"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "entity.name.type"],
      "regex" : "([@])([\\w_\\d]+|)",
      "push" : "is_reference_inner"
   },
   {
      "token" : "string.quoted.single",
      "regex" : "([^\\u  bb\\$@]+(?!$))"
   },
   {
      defaultToken : "text",
   }
], 
"refstr_all__31" : [
   {
      "token" : ["punctuation.definition.string.end", "invalid.illegal"],
      "regex" : "([\\u  ab\\u  bb])|(.$)",
      "next" : "pop"
   },
   {
      "token" : ["constant.character.escape", "invalid.illegal"],
      "regex" : "([\\$](?:[\\da-fA-F]{2}|\\([\\da-fA-F]*\\)|[\"'`znrt\\$@]))|([\\$].)"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "meta.brace.round.rpl", "none"],
      "regex" : "([@])([\\(])(\\s*)",
      "push" : "is_reference_paren__1"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "meta.brace.square.rpl", "none"],
      "regex" : "([@])([\\[])(\\s*)",
      "push" : "is_reference_brack__1"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "entity.name.type"],
      "regex" : "([@])([\\w_\\d]+|)",
      "push" : "is_reference_inner"
   },
   {
      "token" : "string.quoted.single",
      "regex" : "([^\\u  ab\\u  bb\\$@]+(?!$))"
   },
   {
      defaultToken : "text",
   }
], 
"refstr_all__4" : [
   {
      "token" : ["punctuation.definition.string.end", "invalid.illegal"],
      "regex" : "([\\u2019\\u2018\\u201a])|(.$)",
      "next" : "pop"
   },
   {
      "token" : ["constant.character.escape", "invalid.illegal"],
      "regex" : "([\\$](?:[\\da-fA-F]{2}|\\([\\da-fA-F]*\\)|[\"'`znrt\\$@]))|([\\$].)"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "meta.brace.round.rpl", "none"],
      "regex" : "([@])([\\(])(\\s*)",
      "push" : "is_reference_paren__1"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "meta.brace.square.rpl", "none"],
      "regex" : "([@])([\\[])(\\s*)",
      "push" : "is_reference_brack__1"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "entity.name.type"],
      "regex" : "([@])([\\w_\\d]+|)",
      "push" : "is_reference_inner"
   },
   {
      "token" : "string.quoted.single",
      "regex" : "([^\\u2019\\u2018\\u201a\\$@]+(?!$))"
   },
   {
      defaultToken : "text",
   }
], 
"refstr_all__5" : [
   {
      "token" : ["punctuation.definition.string.end", "invalid.illegal"],
      "regex" : "([\\u275b\\u275c])|(.$)",
      "next" : "pop"
   },
   {
      "token" : ["constant.character.escape", "invalid.illegal"],
      "regex" : "([\\$](?:[\\da-fA-F]{2}|\\([\\da-fA-F]*\\)|[\"'`znrt\\$@]))|([\\$].)"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "meta.brace.round.rpl", "none"],
      "regex" : "([@])([\\(])(\\s*)",
      "push" : "is_reference_paren__1"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "meta.brace.square.rpl", "none"],
      "regex" : "([@])([\\[])(\\s*)",
      "push" : "is_reference_brack__1"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "entity.name.type"],
      "regex" : "([@])([\\w_\\d]+|)",
      "push" : "is_reference_inner"
   },
   {
      "token" : "string.quoted.single",
      "regex" : "([^\\u275b\\u275c\\$@]+(?!$))"
   },
   {
      defaultToken : "text",
   }
], 
"refstr_all__6" : [
   {
      "token" : ["punctuation.definition.string.end", "invalid.illegal"],
      "regex" : "([\\u275c\\u275b\\u275f])|(.$)",
      "next" : "pop"
   },
   {
      "token" : ["constant.character.escape", "invalid.illegal"],
      "regex" : "([\\$](?:[\\da-fA-F]{2}|\\([\\da-fA-F]*\\)|[\"'`znrt\\$@]))|([\\$].)"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "meta.brace.round.rpl", "none"],
      "regex" : "([@])([\\(])(\\s*)",
      "push" : "is_reference_paren__1"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "meta.brace.square.rpl", "none"],
      "regex" : "([@])([\\[])(\\s*)",
      "push" : "is_reference_brack__1"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "entity.name.type"],
      "regex" : "([@])([\\w_\\d]+|)",
      "push" : "is_reference_inner"
   },
   {
      "token" : "string.quoted.single",
      "regex" : "([^\\u275c\\u275b\\u275f\\$@]+(?!$))"
   },
   {
      defaultToken : "text",
   }
], 
"refstr_all__7" : [
   {
      "token" : ["punctuation.definition.string.end", "invalid.illegal"],
      "regex" : "([\\u201b\\u2019])|(.$)",
      "next" : "pop"
   },
   {
      "token" : ["constant.character.escape", "invalid.illegal"],
      "regex" : "([\\$](?:[\\da-fA-F]{2}|\\([\\da-fA-F]*\\)|[\"'`znrt\\$@]))|([\\$].)"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "meta.brace.round.rpl", "none"],
      "regex" : "([@])([\\(])(\\s*)",
      "push" : "is_reference_paren__1"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "meta.brace.square.rpl", "none"],
      "regex" : "([@])([\\[])(\\s*)",
      "push" : "is_reference_brack__1"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "entity.name.type"],
      "regex" : "([@])([\\w_\\d]+|)",
      "push" : "is_reference_inner"
   },
   {
      "token" : "string.quoted.single",
      "regex" : "([^\\u201b\\u2019\\$@]+(?!$))"
   },
   {
      defaultToken : "text",
   }
], 
"refstr_all__8" : [
   {
      "token" : ["punctuation.definition.string.end", "invalid.illegal"],
      "regex" : "([\\u300d])|(.$)",
      "next" : "pop"
   },
   {
      "token" : ["constant.character.escape", "invalid.illegal"],
      "regex" : "([\\$](?:[\\da-fA-F]{2}|\\([\\da-fA-F]*\\)|[\"'`znrt\\$@]))|([\\$].)"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "meta.brace.round.rpl", "none"],
      "regex" : "([@])([\\(])(\\s*)",
      "push" : "is_reference_paren__1"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "meta.brace.square.rpl", "none"],
      "regex" : "([@])([\\[])(\\s*)",
      "push" : "is_reference_brack__1"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "entity.name.type"],
      "regex" : "([@])([\\w_\\d]+|)",
      "push" : "is_reference_inner"
   },
   {
      "token" : "string.quoted.single",
      "regex" : "([^\\u300d\\$@]+(?!$))"
   },
   {
      defaultToken : "text",
   }
], 
"refstr_all__9" : [
   {
      "token" : ["punctuation.definition.string.end", "invalid.illegal"],
      "regex" : "([\\u3009])|(.$)",
      "next" : "pop"
   },
   {
      "token" : ["constant.character.escape", "invalid.illegal"],
      "regex" : "([\\$](?:[\\da-fA-F]{2}|\\([\\da-fA-F]*\\)|[\"'`znrt\\$@]))|([\\$].)"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "meta.brace.round.rpl", "none"],
      "regex" : "([@])([\\(])(\\s*)",
      "push" : "is_reference_paren__1"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "meta.brace.square.rpl", "none"],
      "regex" : "([@])([\\[])(\\s*)",
      "push" : "is_reference_brack__1"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "entity.name.type"],
      "regex" : "([@])([\\w_\\d]+|)",
      "push" : "is_reference_inner"
   },
   {
      "token" : "string.quoted.single",
      "regex" : "([^\\u3009\\$@]+(?!$))"
   },
   {
      defaultToken : "text",
   }
], 
"string_all__1" : [
   {
      "token" : ["punctuation.definition.string.end", "invalid.illegal"],
      "regex" : "(['])|(.$)",
      "next" : "pop"
   },
   {
      "token" : ["constant.character.escape", "invalid.illegal"],
      "regex" : "([\\$](?:[\\da-fA-F]{2}|\\([\\da-fA-F]*\\)|[\"'`znrt\\$@]))|([\\$].)"
   },
   {
      "token" : "string.quoted.single",
      "regex" : "([^'\\$]+(?!$))"
   },
   {
      defaultToken : "text",
   }
], 
"string_all__10" : [
   {
      "token" : ["punctuation.definition.string.end", "invalid.illegal"],
      "regex" : "([\\u2019\\u2018])|(.$)",
      "next" : "pop"
   },
   {
      "token" : ["constant.character.escape", "invalid.illegal"],
      "regex" : "([\\$](?:[\\da-fA-F]{2}|\\([\\da-fA-F]*\\)|[\"'`znrt\\$@]))|([\\$].)"
   },
   {
      "token" : "string.quoted.single",
      "regex" : "([^\\u2019\\u2018\\$]+(?!$))"
   },
   {
      defaultToken : "text",
   }
], 
"string_all__11" : [
   {
      "token" : ["punctuation.definition.string.end", "invalid.illegal"],
      "regex" : "([\\u275c\\u275b])|(.$)",
      "next" : "pop"
   },
   {
      "token" : ["constant.character.escape", "invalid.illegal"],
      "regex" : "([\\$](?:[\\da-fA-F]{2}|\\([\\da-fA-F]*\\)|[\"'`znrt\\$@]))|([\\$].)"
   },
   {
      "token" : "string.quoted.single",
      "regex" : "([^\\u275c\\u275b\\$]+(?!$))"
   },
   {
      defaultToken : "text",
   }
], 
"string_all__12" : [
   {
      "token" : ["punctuation.definition.string.end", "invalid.illegal"],
      "regex" : "([\\u203a])|(.$)",
      "next" : "pop"
   },
   {
      "token" : ["constant.character.escape", "invalid.illegal"],
      "regex" : "([\\$](?:[\\da-fA-F]{2}|\\([\\da-fA-F]*\\)|[\"'`znrt\\$@]))|([\\$].)"
   },
   {
      "token" : "string.quoted.single",
      "regex" : "([^\\u203a\\$]+(?!$))"
   },
   {
      defaultToken : "text",
   }
], 
"string_all__13" : [
   {
      "token" : ["punctuation.definition.string.end", "invalid.illegal"],
      "regex" : "([\\u2039])|(.$)",
      "next" : "pop"
   },
   {
      "token" : ["constant.character.escape", "invalid.illegal"],
      "regex" : "([\\$](?:[\\da-fA-F]{2}|\\([\\da-fA-F]*\\)|[\"'`znrt\\$@]))|([\\$].)"
   },
   {
      "token" : "string.quoted.single",
      "regex" : "([^\\u2039\\$]+(?!$))"
   },
   {
      defaultToken : "text",
   }
], 
"string_all__14" : [
   {
      "token" : ["punctuation.definition.string.end", "invalid.illegal"],
      "regex" : "([\\u276f])|(.$)",
      "next" : "pop"
   },
   {
      "token" : ["constant.character.escape", "invalid.illegal"],
      "regex" : "([\\$](?:[\\da-fA-F]{2}|\\([\\da-fA-F]*\\)|[\"'`znrt\\$@]))|([\\$].)"
   },
   {
      "token" : "string.quoted.single",
      "regex" : "([^\\u276f\\$]+(?!$))"
   },
   {
      defaultToken : "text",
   }
], 
"string_all__15" : [
   {
      "token" : ["punctuation.definition.string.end", "invalid.illegal"],
      "regex" : "([\\u276e])|(.$)",
      "next" : "pop"
   },
   {
      "token" : ["constant.character.escape", "invalid.illegal"],
      "regex" : "([\\$](?:[\\da-fA-F]{2}|\\([\\da-fA-F]*\\)|[\"'`znrt\\$@]))|([\\$].)"
   },
   {
      "token" : "string.quoted.single",
      "regex" : "([^\\u276e\\$]+(?!$))"
   },
   {
      defaultToken : "text",
   }
], 
"string_all__16" : [
   {
      "token" : ["punctuation.definition.string.end", "invalid.illegal"],
      "regex" : "([\"])|(.$)",
      "next" : "pop"
   },
   {
      "token" : ["constant.character.escape", "invalid.illegal"],
      "regex" : "([\\$](?:[\\da-fA-F]{2}|\\([\\da-fA-F]*\\)|[\"'`znrt\\$@]))|([\\$].)"
   },
   {
      "token" : "string.quoted.single",
      "regex" : "([^\"\\$]+(?!$))"
   },
   {
      defaultToken : "text",
   }
], 
"string_all__17" : [
   {
      "token" : ["punctuation.definition.string.end", "invalid.illegal"],
      "regex" : "([\\uff02])|(.$)",
      "next" : "pop"
   },
   {
      "token" : ["constant.character.escape", "invalid.illegal"],
      "regex" : "([\\$](?:[\\da-fA-F]{2}|\\([\\da-fA-F]*\\)|[\"'`znrt\\$@]))|([\\$].)"
   },
   {
      "token" : "string.quoted.single",
      "regex" : "([^\\uff02\\$]+(?!$))"
   },
   {
      defaultToken : "text",
   }
], 
"string_all__18" : [
   {
      "token" : ["punctuation.definition.string.end", "invalid.illegal"],
      "regex" : "([\\u201c\\u201d])|(.$)",
      "next" : "pop"
   },
   {
      "token" : ["constant.character.escape", "invalid.illegal"],
      "regex" : "([\\$](?:[\\da-fA-F]{2}|\\([\\da-fA-F]*\\)|[\"'`znrt\\$@]))|([\\$].)"
   },
   {
      "token" : "string.quoted.single",
      "regex" : "([^\\u201c\\u201d\\$]+(?!$))"
   },
   {
      defaultToken : "text",
   }
], 
"string_all__19" : [
   {
      "token" : ["punctuation.definition.string.end", "invalid.illegal"],
      "regex" : "([\\u201d\\u201e])|(.$)",
      "next" : "pop"
   },
   {
      "token" : ["constant.character.escape", "invalid.illegal"],
      "regex" : "([\\$](?:[\\da-fA-F]{2}|\\([\\da-fA-F]*\\)|[\"'`znrt\\$@]))|([\\$].)"
   },
   {
      "token" : "string.quoted.single",
      "regex" : "([^\\u201d\\u201e\\$]+(?!$))"
   },
   {
      defaultToken : "text",
   }
], 
"string_all__2" : [
   {
      "token" : ["punctuation.definition.string.end", "invalid.illegal"],
      "regex" : "([\\uff07])|(.$)",
      "next" : "pop"
   },
   {
      "token" : ["constant.character.escape", "invalid.illegal"],
      "regex" : "([\\$](?:[\\da-fA-F]{2}|\\([\\da-fA-F]*\\)|[\"'`znrt\\$@]))|([\\$].)"
   },
   {
      "token" : "string.quoted.single",
      "regex" : "([^\\uff07\\$]+(?!$))"
   },
   {
      defaultToken : "text",
   }
], 
"string_all__20" : [
   {
      "token" : ["punctuation.definition.string.end", "invalid.illegal"],
      "regex" : "([\\u275d\\u275e])|(.$)",
      "next" : "pop"
   },
   {
      "token" : ["constant.character.escape", "invalid.illegal"],
      "regex" : "([\\$](?:[\\da-fA-F]{2}|\\([\\da-fA-F]*\\)|[\"'`znrt\\$@]))|([\\$].)"
   },
   {
      "token" : "string.quoted.single",
      "regex" : "([^\\u275d\\u275e\\$]+(?!$))"
   },
   {
      defaultToken : "text",
   }
], 
"string_all__21" : [
   {
      "token" : ["punctuation.definition.string.end", "invalid.illegal"],
      "regex" : "([\\u275e\\u2760])|(.$)",
      "next" : "pop"
   },
   {
      "token" : ["constant.character.escape", "invalid.illegal"],
      "regex" : "([\\$](?:[\\da-fA-F]{2}|\\([\\da-fA-F]*\\)|[\"'`znrt\\$@]))|([\\$].)"
   },
   {
      "token" : "string.quoted.single",
      "regex" : "([^\\u275e\\u2760\\$]+(?!$))"
   },
   {
      defaultToken : "text",
   }
], 
"string_all__22" : [
   {
      "token" : ["punctuation.definition.string.end", "invalid.illegal"],
      "regex" : "([\\u{s1:4x}\\u{s2:4x}\\u{s1:4x}\\u{s2:4x}])|(.$)",
      "next" : "pop"
   },
   {
      "token" : ["constant.character.escape", "invalid.illegal"],
      "regex" : "([\\$](?:[\\da-fA-F]{2}|\\([\\da-fA-F]*\\)|[\"'`znrt\\$@]))|([\\$].)"
   },
   {
      "token" : "string.quoted.single",
      "regex" : "([^\\u{s1:4x}\\u{s2:4x}\\u{s1:4x}\\u{s2:4x}\\$]+(?!$))"
   },
   {
      defaultToken : "text",
   }
], 
"string_all__23" : [
   {
      "token" : ["punctuation.definition.string.end", "invalid.illegal"],
      "regex" : "([\\u{s1:4x}\\u{s2:4x}\\u{s1:4x}\\u{s2:4x}])|(.$)",
      "next" : "pop"
   },
   {
      "token" : ["constant.character.escape", "invalid.illegal"],
      "regex" : "([\\$](?:[\\da-fA-F]{2}|\\([\\da-fA-F]*\\)|[\"'`znrt\\$@]))|([\\$].)"
   },
   {
      "token" : "string.quoted.single",
      "regex" : "([^\\u{s1:4x}\\u{s2:4x}\\u{s1:4x}\\u{s2:4x}\\$]+(?!$))"
   },
   {
      defaultToken : "text",
   }
], 
"string_all__24" : [
   {
      "token" : ["punctuation.definition.string.end", "invalid.illegal"],
      "regex" : "([\\u201f\\u201d])|(.$)",
      "next" : "pop"
   },
   {
      "token" : ["constant.character.escape", "invalid.illegal"],
      "regex" : "([\\$](?:[\\da-fA-F]{2}|\\([\\da-fA-F]*\\)|[\"'`znrt\\$@]))|([\\$].)"
   },
   {
      "token" : "string.quoted.single",
      "regex" : "([^\\u201f\\u201d\\$]+(?!$))"
   },
   {
      defaultToken : "text",
   }
], 
"string_all__25" : [
   {
      "token" : ["punctuation.definition.string.end", "invalid.illegal"],
      "regex" : "([\\u300f])|(.$)",
      "next" : "pop"
   },
   {
      "token" : ["constant.character.escape", "invalid.illegal"],
      "regex" : "([\\$](?:[\\da-fA-F]{2}|\\([\\da-fA-F]*\\)|[\"'`znrt\\$@]))|([\\$].)"
   },
   {
      "token" : "string.quoted.single",
      "regex" : "([^\\u300f\\$]+(?!$))"
   },
   {
      defaultToken : "text",
   }
], 
"string_all__26" : [
   {
      "token" : ["punctuation.definition.string.end", "invalid.illegal"],
      "regex" : "([\\u300b])|(.$)",
      "next" : "pop"
   },
   {
      "token" : ["constant.character.escape", "invalid.illegal"],
      "regex" : "([\\$](?:[\\da-fA-F]{2}|\\([\\da-fA-F]*\\)|[\"'`znrt\\$@]))|([\\$].)"
   },
   {
      "token" : "string.quoted.single",
      "regex" : "([^\\u300b\\$]+(?!$))"
   },
   {
      defaultToken : "text",
   }
], 
"string_all__27" : [
   {
      "token" : ["punctuation.definition.string.end", "invalid.illegal"],
      "regex" : "([\\u201c\\u201d])|(.$)",
      "next" : "pop"
   },
   {
      "token" : ["constant.character.escape", "invalid.illegal"],
      "regex" : "([\\$](?:[\\da-fA-F]{2}|\\([\\da-fA-F]*\\)|[\"'`znrt\\$@]))|([\\$].)"
   },
   {
      "token" : "string.quoted.single",
      "regex" : "([^\\u201c\\u201d\\$]+(?!$))"
   },
   {
      defaultToken : "text",
   }
], 
"string_all__28" : [
   {
      "token" : ["punctuation.definition.string.end", "invalid.illegal"],
      "regex" : "([\\u275d\\u275e])|(.$)",
      "next" : "pop"
   },
   {
      "token" : ["constant.character.escape", "invalid.illegal"],
      "regex" : "([\\$](?:[\\da-fA-F]{2}|\\([\\da-fA-F]*\\)|[\"'`znrt\\$@]))|([\\$].)"
   },
   {
      "token" : "string.quoted.single",
      "regex" : "([^\\u275d\\u275e\\$]+(?!$))"
   },
   {
      defaultToken : "text",
   }
], 
"string_all__29" : [
   {
      "token" : ["punctuation.definition.string.end", "invalid.illegal"],
      "regex" : "([\\u{s1:4x}\\u{s2:4x}\\u{s1:4x}\\u{s2:4x}])|(.$)",
      "next" : "pop"
   },
   {
      "token" : ["constant.character.escape", "invalid.illegal"],
      "regex" : "([\\$](?:[\\da-fA-F]{2}|\\([\\da-fA-F]*\\)|[\"'`znrt\\$@]))|([\\$].)"
   },
   {
      "token" : "string.quoted.single",
      "regex" : "([^\\u{s1:4x}\\u{s2:4x}\\u{s1:4x}\\u{s2:4x}\\$]+(?!$))"
   },
   {
      defaultToken : "text",
   }
], 
"string_all__3" : [
   {
      "token" : ["punctuation.definition.string.end", "invalid.illegal"],
      "regex" : "([\\u2018\\u2019])|(.$)",
      "next" : "pop"
   },
   {
      "token" : ["constant.character.escape", "invalid.illegal"],
      "regex" : "([\\$](?:[\\da-fA-F]{2}|\\([\\da-fA-F]*\\)|[\"'`znrt\\$@]))|([\\$].)"
   },
   {
      "token" : "string.quoted.single",
      "regex" : "([^\\u2018\\u2019\\$]+(?!$))"
   },
   {
      defaultToken : "text",
   }
], 
"string_all__30" : [
   {
      "token" : ["punctuation.definition.string.end", "invalid.illegal"],
      "regex" : "([\\u  bb])|(.$)",
      "next" : "pop"
   },
   {
      "token" : ["constant.character.escape", "invalid.illegal"],
      "regex" : "([\\$](?:[\\da-fA-F]{2}|\\([\\da-fA-F]*\\)|[\"'`znrt\\$@]))|([\\$].)"
   },
   {
      "token" : "string.quoted.single",
      "regex" : "([^\\u  bb\\$]+(?!$))"
   },
   {
      defaultToken : "text",
   }
], 
"string_all__31" : [
   {
      "token" : ["punctuation.definition.string.end", "invalid.illegal"],
      "regex" : "([\\u  ab\\u  bb])|(.$)",
      "next" : "pop"
   },
   {
      "token" : ["constant.character.escape", "invalid.illegal"],
      "regex" : "([\\$](?:[\\da-fA-F]{2}|\\([\\da-fA-F]*\\)|[\"'`znrt\\$@]))|([\\$].)"
   },
   {
      "token" : "string.quoted.single",
      "regex" : "([^\\u  ab\\u  bb\\$]+(?!$))"
   },
   {
      defaultToken : "text",
   }
], 
"string_all__4" : [
   {
      "token" : ["punctuation.definition.string.end", "invalid.illegal"],
      "regex" : "([\\u2019\\u2018\\u201a])|(.$)",
      "next" : "pop"
   },
   {
      "token" : ["constant.character.escape", "invalid.illegal"],
      "regex" : "([\\$](?:[\\da-fA-F]{2}|\\([\\da-fA-F]*\\)|[\"'`znrt\\$@]))|([\\$].)"
   },
   {
      "token" : "string.quoted.single",
      "regex" : "([^\\u2019\\u2018\\u201a\\$]+(?!$))"
   },
   {
      defaultToken : "text",
   }
], 
"string_all__5" : [
   {
      "token" : ["punctuation.definition.string.end", "invalid.illegal"],
      "regex" : "([\\u275b\\u275c])|(.$)",
      "next" : "pop"
   },
   {
      "token" : ["constant.character.escape", "invalid.illegal"],
      "regex" : "([\\$](?:[\\da-fA-F]{2}|\\([\\da-fA-F]*\\)|[\"'`znrt\\$@]))|([\\$].)"
   },
   {
      "token" : "string.quoted.single",
      "regex" : "([^\\u275b\\u275c\\$]+(?!$))"
   },
   {
      defaultToken : "text",
   }
], 
"string_all__6" : [
   {
      "token" : ["punctuation.definition.string.end", "invalid.illegal"],
      "regex" : "([\\u275c\\u275b\\u275f])|(.$)",
      "next" : "pop"
   },
   {
      "token" : ["constant.character.escape", "invalid.illegal"],
      "regex" : "([\\$](?:[\\da-fA-F]{2}|\\([\\da-fA-F]*\\)|[\"'`znrt\\$@]))|([\\$].)"
   },
   {
      "token" : "string.quoted.single",
      "regex" : "([^\\u275c\\u275b\\u275f\\$]+(?!$))"
   },
   {
      defaultToken : "text",
   }
], 
"string_all__7" : [
   {
      "token" : ["punctuation.definition.string.end", "invalid.illegal"],
      "regex" : "([\\u201b\\u2019])|(.$)",
      "next" : "pop"
   },
   {
      "token" : ["constant.character.escape", "invalid.illegal"],
      "regex" : "([\\$](?:[\\da-fA-F]{2}|\\([\\da-fA-F]*\\)|[\"'`znrt\\$@]))|([\\$].)"
   },
   {
      "token" : "string.quoted.single",
      "regex" : "([^\\u201b\\u2019\\$]+(?!$))"
   },
   {
      defaultToken : "text",
   }
], 
"string_all__8" : [
   {
      "token" : ["punctuation.definition.string.end", "invalid.illegal"],
      "regex" : "([\\u300d])|(.$)",
      "next" : "pop"
   },
   {
      "token" : ["constant.character.escape", "invalid.illegal"],
      "regex" : "([\\$](?:[\\da-fA-F]{2}|\\([\\da-fA-F]*\\)|[\"'`znrt\\$@]))|([\\$].)"
   },
   {
      "token" : "string.quoted.single",
      "regex" : "([^\\u300d\\$]+(?!$))"
   },
   {
      defaultToken : "text",
   }
], 
"string_all__9" : [
   {
      "token" : ["punctuation.definition.string.end", "invalid.illegal"],
      "regex" : "([\\u3009])|(.$)",
      "next" : "pop"
   },
   {
      "token" : ["constant.character.escape", "invalid.illegal"],
      "regex" : "([\\$](?:[\\da-fA-F]{2}|\\([\\da-fA-F]*\\)|[\"'`znrt\\$@]))|([\\$].)"
   },
   {
      "token" : "string.quoted.single",
      "regex" : "([^\\u3009\\$]+(?!$))"
   },
   {
      defaultToken : "text",
   }
], 
"struct_body__1" : [
   {
      "token" : "punctuation",
      "regex" : "([\\}])",
      "next" : "pop"
   },
   {
      "token" : ["punctuation.definition.comment", "comment.line.number-sign"],
      "regex" : "([#]+)(.*$)"
   },
   {
      "token" : "support.variable",
      "regex" : "([:])",
      "push" : "key_value_body"
   },
   {
      "token" : ["punctuation.definition.comment", "comment.line.number-sign"],
      "regex" : "([#]+)(.*$)"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(')",
      "push" : "refstr_all__1"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\uff07)",
      "push" : "refstr_all__2"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u2018)",
      "push" : "refstr_all__3"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u2019)",
      "push" : "refstr_all__4"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u275b)",
      "push" : "refstr_all__5"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u275c)",
      "push" : "refstr_all__6"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u201b)",
      "push" : "refstr_all__7"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u300c)",
      "push" : "refstr_all__8"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u3008)",
      "push" : "refstr_all__9"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u201a)",
      "push" : "refstr_all__10"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u275f)",
      "push" : "refstr_all__11"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u2039)",
      "push" : "refstr_all__12"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u203a)",
      "push" : "refstr_all__13"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u276e)",
      "push" : "refstr_all__14"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u276f)",
      "push" : "refstr_all__15"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\")",
      "push" : "refstr_all__16"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\uff02)",
      "push" : "refstr_all__17"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u201c)",
      "push" : "refstr_all__18"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u201d)",
      "push" : "refstr_all__19"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u275d)",
      "push" : "refstr_all__20"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u275e)",
      "push" : "refstr_all__21"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u{s1:4x}\\u{s2:4x})",
      "push" : "refstr_all__22"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u{s1:4x}\\u{s2:4x})",
      "push" : "refstr_all__23"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u201f)",
      "push" : "refstr_all__24"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u300e)",
      "push" : "refstr_all__25"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u300a)",
      "push" : "refstr_all__26"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u201e)",
      "push" : "refstr_all__27"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u2760)",
      "push" : "refstr_all__28"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u{s1:4x}\\u{s2:4x})",
      "push" : "refstr_all__29"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u  ab)",
      "push" : "refstr_all__30"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u  bb)",
      "push" : "refstr_all__31"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(')",
      "push" : "string_all__1"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\uff07)",
      "push" : "string_all__2"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u2018)",
      "push" : "string_all__3"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u2019)",
      "push" : "string_all__4"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u275b)",
      "push" : "string_all__5"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u275c)",
      "push" : "string_all__6"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u201b)",
      "push" : "string_all__7"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u300c)",
      "push" : "string_all__8"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u3008)",
      "push" : "string_all__9"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u201a)",
      "push" : "string_all__10"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u275f)",
      "push" : "string_all__11"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u2039)",
      "push" : "string_all__12"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u203a)",
      "push" : "string_all__13"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u276e)",
      "push" : "string_all__14"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u276f)",
      "push" : "string_all__15"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\")",
      "push" : "string_all__16"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\uff02)",
      "push" : "string_all__17"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u201c)",
      "push" : "string_all__18"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u201d)",
      "push" : "string_all__19"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u275d)",
      "push" : "string_all__20"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u275e)",
      "push" : "string_all__21"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u{s1:4x}\\u{s2:4x})",
      "push" : "string_all__22"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u{s1:4x}\\u{s2:4x})",
      "push" : "string_all__23"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u201f)",
      "push" : "string_all__24"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u300e)",
      "push" : "string_all__25"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u300a)",
      "push" : "string_all__26"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u201e)",
      "push" : "string_all__27"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u2760)",
      "push" : "string_all__28"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u{s1:4x}\\u{s2:4x})",
      "push" : "string_all__29"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u  ab)",
      "push" : "string_all__30"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u  bb)",
      "push" : "string_all__31"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(--|[\u2013\u2014\u2015])",
      "push" : "dash_refstring__1"
   },
   {
      "token" : ["punctuation.definition.string.begin", "keyword.operator"],
      "regex" : "(--|[\u2013\u2014\u2015])([\\+])",
      "push" : "math_dash_string__1"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(--|[\u2013\u2014\u2015])",
      "push" : "dash_string__1"
   },
   {
      "token" : "none",
      "regex" : "(?=[@][`])",
      "push" : "refmultistr__1"
   },
   {
      "token" : ["punctuation.definition.string.begin", "keyword.operator"],
      "regex" : "([`]{3})([\\+])",
      "push" : "math_quoted3__1"
   },
   {
      "token" : ["punctuation.definition.string.begin", "keyword.operator"],
      "regex" : "([`])([\\+])",
      "push" : "math_quoted1__1"
   },
   {
      "token" : "none",
      "regex" : "(?=[`])",
      "push" : "multistr__1"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "none", "meta.brace.round.rpl"],
      "regex" : "([@])(\\s*)([\\(])",
      "push" : "reference_paren__1"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "none", "meta.brace.square.rpl"],
      "regex" : "([@])(\\s*)([\\[])",
      "push" : "reference_brack__1"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "none", "variable.language", "entity.name.type"],
      "regex" : "([@])(\\s*)(?:(this|g*parent|w*back|Defs)|([\\w_\\d]+)|)",
      "push" : "reference_inner"
   },
   {
      "token" : ["constant.numeric.integer.decimal", "constant.numeric.integer.hexadecimal", "none", "keyword.operator.range", "none", "constant.numeric.integer.decimal", "constant.numeric.integer.hexadecimal"],
      "regex" : "(?:(\\b\\d+)|([\\$][\\da-fA-F]+))(\\s*)([-~*+\u00b1]|\\+-)(\\s*)(?:(\\b\\d+)|([\\$][\\da-fA-F]+))"
   },
   {
      "token" : ["constant.numeric.integer.decimal", "constant.numeric.integer.non-decimal"],
      "regex" : "(?:(\\b\\d+)|([\\$][\\da-fA-F]+))(?=\\s*[:,#\\)\\]\\}]|\\s*$)"
   },
   {
      "token" : "support.variable",
      "regex" : "(\\b[a-z][a-z\\d]*\\s*[:])",
      "push" : "key_value_body"
   },
   {
      "token" : "punctuation",
      "regex" : "([\\[])",
      "push" : "list__1"
   },
   {
      "token" : ["keyword", "storage.type"],
      "regex" : "(ROM|RPL|rom|rpl)|(\\b[a-z][a-z\\d]*)"
   },
   {
      "token" : "entity.name.type",
      "regex" : "(\\b[\\w_\\d]+)"
   },
   {
      "token" : "punctuation",
      "regex" : "([\\{])",
      "push" : "struct_body__1"
   },
   {
      defaultToken : "text",
   }
], 
"subscript__1" : [
   {
      "token" : "punctuation",
      "regex" : "([\\}])",
      "next" : "pop"
   },
   {
      "token" : ["punctuation.definition.comment", "comment.line.number-sign"],
      "regex" : "([#]+)(.*$)"
   },
   {
      "token" : ["keyword", "text.unquoted"],
      "regex" : "(?=\\S)(?![a-z][a-z\\d]*\\s*[\\(\\[\\{])(?:(false|true|undefined|black|white|red|blue|green|yellow|magenta|pink|cyan|gray|grey|transparent|byte|short|long|double|LRUD|LRDU|RLUD|RLDU|UDLR|UDRL|DULR|DURL|LU|LD|RU|RD|UL|UR|DL|DR|big|little|(?:un)?signed|left|right|r?center|l?both|expand|\\*)|([^:,#\\(\\[\\{\\)\\]\\}]+))"
   },
   {
      defaultToken : "text",
   }
], 
"value_body" : [
   {
      "token" : "meta.delimiter.object.comma",
      "regex" : "([,]|(?=[\\)\\]\\}]))",
      "next" : "pop"
   },
   {
      "token" : ["punctuation.definition.comment", "comment.line.number-sign"],
      "regex" : "([#]+)(.*$)"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(')",
      "push" : "refstr_all__1"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\uff07)",
      "push" : "refstr_all__2"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u2018)",
      "push" : "refstr_all__3"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u2019)",
      "push" : "refstr_all__4"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u275b)",
      "push" : "refstr_all__5"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u275c)",
      "push" : "refstr_all__6"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u201b)",
      "push" : "refstr_all__7"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u300c)",
      "push" : "refstr_all__8"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u3008)",
      "push" : "refstr_all__9"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u201a)",
      "push" : "refstr_all__10"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u275f)",
      "push" : "refstr_all__11"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u2039)",
      "push" : "refstr_all__12"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u203a)",
      "push" : "refstr_all__13"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u276e)",
      "push" : "refstr_all__14"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u276f)",
      "push" : "refstr_all__15"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\")",
      "push" : "refstr_all__16"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\uff02)",
      "push" : "refstr_all__17"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u201c)",
      "push" : "refstr_all__18"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u201d)",
      "push" : "refstr_all__19"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u275d)",
      "push" : "refstr_all__20"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u275e)",
      "push" : "refstr_all__21"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u{s1:4x}\\u{s2:4x})",
      "push" : "refstr_all__22"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u{s1:4x}\\u{s2:4x})",
      "push" : "refstr_all__23"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u201f)",
      "push" : "refstr_all__24"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u300e)",
      "push" : "refstr_all__25"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u300a)",
      "push" : "refstr_all__26"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u201e)",
      "push" : "refstr_all__27"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u2760)",
      "push" : "refstr_all__28"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u{s1:4x}\\u{s2:4x})",
      "push" : "refstr_all__29"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u  ab)",
      "push" : "refstr_all__30"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(\\u  bb)",
      "push" : "refstr_all__31"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(')",
      "push" : "string_all__1"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\uff07)",
      "push" : "string_all__2"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u2018)",
      "push" : "string_all__3"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u2019)",
      "push" : "string_all__4"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u275b)",
      "push" : "string_all__5"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u275c)",
      "push" : "string_all__6"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u201b)",
      "push" : "string_all__7"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u300c)",
      "push" : "string_all__8"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u3008)",
      "push" : "string_all__9"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u201a)",
      "push" : "string_all__10"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u275f)",
      "push" : "string_all__11"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u2039)",
      "push" : "string_all__12"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u203a)",
      "push" : "string_all__13"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u276e)",
      "push" : "string_all__14"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u276f)",
      "push" : "string_all__15"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\")",
      "push" : "string_all__16"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\uff02)",
      "push" : "string_all__17"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u201c)",
      "push" : "string_all__18"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u201d)",
      "push" : "string_all__19"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u275d)",
      "push" : "string_all__20"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u275e)",
      "push" : "string_all__21"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u{s1:4x}\\u{s2:4x})",
      "push" : "string_all__22"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u{s1:4x}\\u{s2:4x})",
      "push" : "string_all__23"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u201f)",
      "push" : "string_all__24"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u300e)",
      "push" : "string_all__25"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u300a)",
      "push" : "string_all__26"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u201e)",
      "push" : "string_all__27"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u2760)",
      "push" : "string_all__28"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u{s1:4x}\\u{s2:4x})",
      "push" : "string_all__29"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u  ab)",
      "push" : "string_all__30"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(\\u  bb)",
      "push" : "string_all__31"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "punctuation.definition.string.begin"],
      "regex" : "([@])(--|[\u2013\u2014\u2015])",
      "push" : "dash_refstring__1"
   },
   {
      "token" : ["punctuation.definition.string.begin", "keyword.operator"],
      "regex" : "(--|[\u2013\u2014\u2015])([\\+])",
      "push" : "math_dash_string__1"
   },
   {
      "token" : "punctuation.definition.string.begin",
      "regex" : "(--|[\u2013\u2014\u2015])",
      "push" : "dash_string__1"
   },
   {
      "token" : "none",
      "regex" : "(?=[@][`])",
      "push" : "refmultistr__1"
   },
   {
      "token" : ["punctuation.definition.string.begin", "keyword.operator"],
      "regex" : "([`]{3})([\\+])",
      "push" : "math_quoted3__1"
   },
   {
      "token" : ["punctuation.definition.string.begin", "keyword.operator"],
      "regex" : "([`])([\\+])",
      "push" : "math_quoted1__1"
   },
   {
      "token" : "none",
      "regex" : "(?=[`])",
      "push" : "multistr__1"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "none", "meta.brace.round.rpl"],
      "regex" : "([@])(\\s*)([\\(])",
      "push" : "reference_paren__1"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "none", "meta.brace.square.rpl"],
      "regex" : "([@])(\\s*)([\\[])",
      "push" : "reference_brack__1"
   },
   {
      "token" : ["punctuation.definition.mapping.begin", "none", "variable.language", "entity.name.type"],
      "regex" : "([@])(\\s*)(?:(this|g*parent|w*back|Defs)|([\\w_\\d]+)|)",
      "push" : "reference_inner"
   },
   {
      "token" : ["constant.numeric.integer.decimal", "constant.numeric.integer.hexadecimal", "none", "keyword.operator.range", "none", "constant.numeric.integer.decimal", "constant.numeric.integer.hexadecimal"],
      "regex" : "(?:(\\b\\d+)|([\\$][\\da-fA-F]+))(\\s*)([-~*+\u00b1]|\\+-)(\\s*)(?:(\\b\\d+)|([\\$][\\da-fA-F]+))"
   },
   {
      "token" : ["constant.numeric.integer.decimal", "constant.numeric.integer.non-decimal"],
      "regex" : "(?:(\\b\\d+)|([\\$][\\da-fA-F]+))(?=\\s*[:,#\\)\\]\\}]|\\s*$)"
   },
   {
      "token" : "punctuation",
      "regex" : "([\\[])",
      "push" : "list__1"
   },
   {
      "token" : ["punctuation", "punctuation"],
      "regex" : "([:])(\\1?)"
   },
   {
      "token" : "keyword.operator",
      "regex" : "([\\+])",
      "push" : "math_literal__1"
   },
   {
      "token" : ["keyword", "text.unquoted"],
      "regex" : "(?=\\S)(?![a-z][a-z\\d]*\\s*[\\(\\[\\{])(?:(false|true|undefined|black|white|red|blue|green|yellow|magenta|pink|cyan|gray|grey|transparent|byte|short|long|double|LRUD|LRDU|RLUD|RLDU|UDLR|UDRL|DULR|DURL|LU|LD|RU|RD|UL|UR|DL|DR|big|little|(?:un)?signed|left|right|r?center|l?both|expand|\\*)|([^:,#\\(\\[\\{\\)\\]\\}]+))"
   },
   {
      "token" : "storage.type",
      "regex" : "(\\b[a-z][a-z\\d]*)(?=\\s*[\\(])",
      "push" : "value_struct_tp__1"
   },
   {
      "token" : "storage.type",
      "regex" : "(\\b[a-z][a-z\\d]*)(?=\\s*[\\[])",
      "push" : "value_struct_tl__1"
   },
   {
      "token" : "storage.type",
      "regex" : "(\\b[a-z][a-z\\d]*)(?=\\s*[\\{])",
      "push" : "value_struct_tb__1"
   },
   {
      defaultToken : "text",
   }
], 
"value_struct_p__1" : [
   {
      "token" : "meta.brace.round.rpl",
      "regex" : "([\\)])",
      "next" : "pop"
   },
   {
      "token" : "meta.brace.round.rpl",
      "regex" : "([\\(])",
      "push" : "value_body"
   },
   {
      defaultToken : "text",
   }
], 
"value_struct_tb__1" : [
   {
      "token" : "punctuation",
      "regex" : "([\\}])",
      "next" : "pop"
   },
   {
      "token" : "punctuation",
      "regex" : "([\\{])",
      "push" : "struct_body__1"
   },
   {
      defaultToken : "text",
   }
], 
"value_struct_tl__1" : [
   {
      "token" : "meta.brace.square.rpl",
      "regex" : "([\\]])",
      "next" : "pop"
   },
   {
      "token" : "meta.brace.square.rpl",
      "regex" : "([\\[])",
      "push" : "value_body"
   },
   {
      defaultToken : "text",
   }
], 
"value_struct_tp__1" : [
   {
      "token" : "meta.brace.round.rpl",
      "regex" : "([\\)])",
      "next" : "pop"
   },
   {
      "token" : "meta.brace.round.rpl",
      "regex" : "([\\(])",
      "push" : "value_body"
   },
   {
      defaultToken : "text",
   }
]
};
this.normalizeRules();
};
/* ------------------------ END ------------------------------ */
oop.inherits(RplHighlightRules, TextHighlightRules);
exports.RplHighlightRules = RplHighlightRules;
});
