#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import os
import re
import argparse

import jinja2

def main():
	parser = argparse.ArgumentParser(
		description="Build syntax definitions .j2 files.")
	parser.add_argument(
		"--ascii", "-a", action="store_true",
		help="Build ASCII-only version.")
	parser.add_argument(
		"--unicode", "-u", action="store_true",
		help="Build Unicode-compatible version.")
	parser.add_argument(
		"--multi", "-m", default=3,
		help=(
			"If a syntax doesn't support end->start backreferencing, it"
			" should generate up to this number of quotes. (Default: 3)"))
	parser.add_argument(
		"--no-cleanup", "-C", action="store_true",
		help="Don't clean up ~~DEL~~ strings.")
	parser.add_argument(
		"files", nargs="+",
		help=".j2 templates to build.")
	args = parser.parse_args()

	modes = []
	if args.unicode:
		modes.append(0)
	if args.ascii:
		modes.append(1)

	filename_templates = ["{}.{}", "{}_ascii.{}"]

	for fn in args.files:
		if not fn.endswith(".j2"):
			print(f"Not a known template format: {fn}")
			continue

		path, base = os.path.split(fn)
		out_file, *out_ext = base.split(".")
		prefix = os.path.join(path, out_file)
		suffix = ".".join(out_ext[:-1])

		for mode in modes:
			out_filename = filename_templates[mode].format(prefix, suffix)
			result = build_j2(fn, mode == 1, args)

			if not args.no_cleanup:
				result = cleanup(result)

			with open(out_filename, "w", encoding="utf8") as f:
				f.write(result)
			print(f"Wrote out {out_filename}")


DEL = re.compile(r'^.*~~DEL~~.*$(?:\s+?^|\Z)', re.M)
DEL_NEXT = re.compile(r'^.*~~DEL NEXT~~.*$(?:\s*?^.*$(?:\s+?^|\Z)|\Z)', re.M)
def cleanup(text):
	return DEL.sub("", DEL_NEXT.sub("", text))


class Quotes:
	match = {
		# Double
		## Half, full
		'"': '"', '＂': '＂',
		## Rounded, heavy, sans-serif heavy
		'“': '“”', '❝': '❝❞', '🙶': '🙶🙷',
		'”': '”„', '❞': '❞❠', '🙷': '🙷🙸',
		'„': '“”', '❠': '❝❞', '🙸': '🙶🙷',
		## Reversed
		'‟': '‟”',
		# Single
		## Half, full
		"'": "'", "＇": "＇",
		## Rounded, heavy
		"‘": "‘’",  "❛": "❛❜",
		"’": "’‘‚", "❜": "❜❛❟",
		"‚": "’‘",  "❟": "❜❛",
		## Reversed
		"‛": "‛’",
		# CJK
		## Full, half
		"「": "」", "｢": "｣",
		## Full
		'『': '』',
		"《": "》",
		"〈": "〉",
		# Chevrons
		'«': '»',
		'»': '«»',
		## Regular, heavy
		"‹": "›", "❮": "❯",
		"›": "‹", "❯": "❮",
	}

	ascii = "\"'"
	mirrored = ascii + "＂＇"

	# Note that rarely single quotes are the primary quote.
	# Thus, we can't really be more semantic about this.
	# Which has annoying implications for 「 because it's always primary.
	lsingles = "'＇‘’❛❜‛「〈‚❟‹›❮❯"
	rsingles = "'＇‘’❛❜‛’」〉‚❟›‹❯❮"
	singles = lsingles + rsingles

	ldoubles = '"＂“”❝❞🙶🙷‟『《„❠🙸«»'
	rdoubles = '"＂“”❝❞🙶🙷‟”』》„❠🙸»«'
	doubles = ldoubles + rdoubles

	lquotes = lsingles + ldoubles
	rquotes = rsingles + rdoubles
	quotes = singles + doubles


J2_ENV = jinja2.Environment(
	loader=jinja2.FileSystemLoader("."))
def build_j2(fn, ascii, args):
	template = J2_ENV.get_template(fn)
	return template.render(
		quotes=Quotes,
		ascii=ascii,
		multi=int(args.multi),
	)


def escape_unicode_in_regex(value, surrogate=True):
	def escape(c):
		o = ord(c)
		if surrogate and o > 0xffff:
			u = c.encode("utf-16-le")
			s1 = int.from_bytes(u[:2], "little")
			s2 = int.from_bytes(u[2:], "little")
			return "\\u{s1:4x}\\u{s2:4x}"
		if o < 0x20 or o > 0x7e:
			return f"\\u{o:4x}"
		return c

	return "".join(escape(c) for c in value)
J2_ENV.filters["safe"] = escape_unicode_in_regex


if __name__ == "__main__":
	main()
