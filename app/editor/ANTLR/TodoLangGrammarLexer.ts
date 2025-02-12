// Generated from ./TodoLangGrammar.g4 by ANTLR 4.7.3-SNAPSHOT
/* eslint-disable */


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class TodoLangGrammarLexer extends Lexer {
	public static readonly ADD = 1;
	public static readonly TODO = 2;
	public static readonly COMPLETE = 3;
	public static readonly STRING = 4;
	public static readonly EOL = 5;
	public static readonly WS = 6;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"ADD", "TODO", "COMPLETE", "STRING", "EOL", "WS",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'ADD'", "'TODO'", "'COMPLETE'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "ADD", "TODO", "COMPLETE", "STRING", "EOL", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(TodoLangGrammarLexer._LITERAL_NAMES, TodoLangGrammarLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return TodoLangGrammarLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(TodoLangGrammarLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "TodoLangGrammar.g4"; }

	// @Override
	public get ruleNames(): string[] { return TodoLangGrammarLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return TodoLangGrammarLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return TodoLangGrammarLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return TodoLangGrammarLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\b5\b\x01\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x03\x02\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x05\x03\x05\x07\x05$\n\x05\f\x05\x0E\x05\'\v\x05\x03" +
		"\x05\x03\x05\x03\x06\x06\x06,\n\x06\r\x06\x0E\x06-\x03\x06\x03\x06\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x02\x02\x02\b\x03\x02\x03\x05\x02\x04\x07" +
		"\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x03\x02\x05\x03\x02$$\x04\x02\f\f" +
		"\x0F\x0F\x04\x02\v\v\"\"\x026\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02" +
		"\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02" +
		"\x02\x02\r\x03\x02\x02\x02\x03\x0F\x03\x02\x02\x02\x05\x13\x03\x02\x02" +
		"\x02\x07\x18\x03\x02\x02\x02\t!\x03\x02\x02\x02\v+\x03\x02\x02\x02\r1" +
		"\x03\x02\x02\x02\x0F\x10\x07C\x02\x02\x10\x11\x07F\x02\x02\x11\x12\x07" +
		"F\x02\x02\x12\x04\x03\x02\x02\x02\x13\x14\x07V\x02\x02\x14\x15\x07Q\x02" +
		"\x02\x15\x16\x07F\x02\x02\x16\x17\x07Q\x02\x02\x17\x06\x03\x02\x02\x02" +
		"\x18\x19\x07E\x02\x02\x19\x1A\x07Q\x02\x02\x1A\x1B\x07O\x02\x02\x1B\x1C" +
		"\x07R\x02\x02\x1C\x1D\x07N\x02\x02\x1D\x1E\x07G\x02\x02\x1E\x1F\x07V\x02" +
		"\x02\x1F \x07G\x02\x02 \b\x03\x02\x02\x02!%\x07$\x02\x02\"$\n\x02\x02" +
		"\x02#\"\x03\x02\x02\x02$\'\x03\x02\x02\x02%#\x03\x02\x02\x02%&\x03\x02" +
		"\x02\x02&(\x03\x02\x02\x02\'%\x03\x02\x02\x02()\x07$\x02\x02)\n\x03\x02" +
		"\x02\x02*,\t\x03\x02\x02+*\x03\x02\x02\x02,-\x03\x02\x02\x02-+\x03\x02" +
		"\x02\x02-.\x03\x02\x02\x02./\x03\x02\x02\x02/0\b\x06\x02\x020\f\x03\x02" +
		"\x02\x0212\t\x04\x02\x0223\x03\x02\x02\x0234\b\x07\x02\x024\x0E\x03\x02" +
		"\x02\x02\x05\x02%-\x03\b\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!TodoLangGrammarLexer.__ATN) {
			TodoLangGrammarLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(TodoLangGrammarLexer._serializedATN));
		}

		return TodoLangGrammarLexer.__ATN;
	}

}

