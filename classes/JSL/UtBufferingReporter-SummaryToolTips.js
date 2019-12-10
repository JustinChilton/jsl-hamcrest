NDSummary.OnToolTipsLoaded("JSLClass:UtBufferingReporter",{321:"<div class=\"NDToolTip TClass LJSL\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype321\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">UtBufferingReporter</div></div></div><div class=\"TTSummary\">Holds buffer of events until release is called.</div></div>",323:"<div class=\"NDToolTip TFunction LJSL\"><div id=\"NDPrototype323\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">ut test log benchmark label(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">string</span> case_name&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">test_name&nbsp;</td></tr></table></td><td class=\"PAfterParameters\">);</td></tr></table></div><div class=\"TTSummary\">Returns	the label used when a test log benchmark fails. This is an extension point for ut test and can be overwritten to customize the label.</div></div>",324:"<div class=\"NDToolTip TFunction LJSL\"><div id=\"NDPrototype324\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">ut test(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">UtTestCaseFixture&nbsp;</td><td class=\"PName\">test_case,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName\">test_name,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\">expression&nbsp;</td><td class=\"PName\">test_expr,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\">UtLogBenchmark&nbsp;</td><td class=\"PName\">log_benchmark&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\">ut log bench( <span class=\"SHNumber\">1</span>, <span class=\"SHString\">&quot;&quot;</span> )</td></tr></table></td><td class=\"PAfterParameters\">);</td></tr></table></div><div class=\"TTSummary\">Run a test expression. Runs any given setup and tear down expressions.&nbsp; Reports any unexpected exceptions as failures.</div></div>",325:"<div class=\"NDToolTip TFunction LJSL\"><div id=\"NDPrototype325\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">ut log bench(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">integer</span>&nbsp;</td><td class=\"PName\">do_log_bench&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\">ut_log_bench_default,</td></tr><tr><td class=\"PType first\">UtMatcher&nbsp;</td><td class=\"PName\">matcher&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHString\">&quot;&quot;</span></td></tr></table></td><td class=\"PAfterParameters\">);</td></tr></table></div><div class=\"TTSummary\">do log bench args -&nbsp; 0: Capture the log and throw it away (no benchmark, matcher not run) -&nbsp; 1: Capture the log and assert that contents satisfy the matcher - -1: Do not capture the log (no benchmark, matcher not run)</div></div>",333:"<div class=\"NDToolTip TFunction LJSL\"><div class=\"TTSummary\">Register a function to be handled within ut test.</div></div>",334:"<div class=\"NDToolTip TFunction LJSL\"><div class=\"TTSummary\">Builds a local assignment of an assertion function for decorating within ut test.</div></div>",335:"<div class=\"NDToolTip TFunction LJSL\"><div id=\"NDPrototype335\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">ut expand test(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">UtTestCaseFixture&nbsp;</td><td class=\"PName\">test_case,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName\">_dummy1,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\">expression&nbsp;</td><td class=\"PName\">test_expr,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\">missing&nbsp;</td><td class=\"PName\">_dummy2&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\">.</td></tr></table></td><td class=\"PAfterParameters\">);</td></tr></table></div><div class=\"TTSummary\">Accepts same arguments as ut test, but returns you an expression with all parts expanded. Might be useful for debugging your script.</div></div>"});