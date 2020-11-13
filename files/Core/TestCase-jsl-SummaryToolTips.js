NDSummary.OnToolTipsLoaded("File:Core/TestCase.jsl",{326:"<div class=\"NDToolTip TClass LJSL\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype326\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">UtTestCaseFixture</div></div></div><div class=\"TTSummary\">Holds information about a Test Case.</div></div>",328:"<div class=\"NDToolTip TVariable LJSL\"><div class=\"TTSummary\">Self reference.</div></div>",329:"<div class=\"NDToolTip TVariable LJSL\"><div class=\"TTSummary\">Name of the test case</div></div>",332:"<div class=\"NDToolTip TFunction LJSL\"><div class=\"TTSummary\">Constructor for ut test case</div></div>",333:"<div class=\"NDToolTip TFunction LJSL\"><div class=\"TTSummary\">Sets a setup expression to be run before each test is evaluated.</div></div>",335:"<div class=\"NDToolTip TFunction LJSL\"><div class=\"TTSummary\">Sets a teardown expression to be run after each test is evaluated.</div></div>",337:"<div class=\"NDToolTip TClass LJSL\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype337\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">UtLogBenchmark</div></div></div><div class=\"TTSummary\">Holds log benchmarking information for use in &lt;ut test&gt;.</div></div>",340:"<div class=\"NDToolTip TFunction LJSL\"><div class=\"TTSummary\">Used to isolate a test case from other code in the test file.&nbsp; Also prepends the name of the test and assert number to the beginning of the labels for ut assert that.</div></div>",341:"<div class=\"NDToolTip TClass LJSL\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype341\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">UtSuccessFilteringReporter</div></div></div><div class=\"TTSummary\">Forwards only non-successful events to an inner reporter.</div></div>",342:"<div class=\"NDToolTip TClass LJSL\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype342\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">UtBufferingReporter</div></div></div><div class=\"TTSummary\">Holds buffer of events until release is called.</div></div>",344:"<div class=\"NDToolTip TFunction LJSL\"><div id=\"NDPrototype344\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">ut test log benchmark label(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">string</span> case_name&nbsp;</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">test_name&nbsp;</td></tr></table></td><td class=\"PAfterParameters\">);</td></tr></table></div><div class=\"TTSummary\">Returns	the label used when a test log benchmark fails. This is an extension point for ut test and can be overwritten to customize the label.</div></div>",345:"<div class=\"NDToolTip TFunction LJSL\"><div id=\"NDPrototype345\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">ut test(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">UtTestCaseFixture&nbsp;</td><td class=\"PName\">test_case,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName\">test_name,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\">expression&nbsp;</td><td class=\"PName\">test_expr,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\">UtLogBenchmark&nbsp;</td><td class=\"PName\">log_benchmark&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\">ut log bench( <span class=\"SHNumber\">1</span>, <span class=\"SHString\">&quot;&quot;</span> )</td></tr></table></td><td class=\"PAfterParameters\">);</td></tr></table></div><div class=\"TTSummary\">Run a test expression. Runs any given setup and tear down expressions.&nbsp; Reports any unexpected exceptions as failures.</div></div>",346:"<div class=\"NDToolTip TFunction LJSL\"><div id=\"NDPrototype346\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">ut log bench(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">integer</span>&nbsp;</td><td class=\"PName\">do_log_bench&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\">ut_log_bench_default,</td></tr><tr><td class=\"PType first\">UtMatcher&nbsp;</td><td class=\"PName\">matcher&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHString\">&quot;&quot;</span></td></tr></table></td><td class=\"PAfterParameters\">);</td></tr></table></div><div class=\"TTSummary\">do log bench args -&nbsp; 0: Capture the log and throw it away (no benchmark, matcher not run) -&nbsp; 1: Capture the log and assert that contents satisfy the matcher - -1: Do not capture the log (no benchmark, matcher not run)</div></div>",354:"<div class=\"NDToolTip TFunction LJSL\"><div class=\"TTSummary\">Register a function to be handled within ut test.</div></div>",355:"<div class=\"NDToolTip TFunction LJSL\"><div class=\"TTSummary\">Builds a local assignment of an assertion function for decorating within ut test.</div></div>",356:"<div class=\"NDToolTip TFunction LJSL\"><div id=\"NDPrototype356\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">ut expand test(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">UtTestCaseFixture&nbsp;</td><td class=\"PName\">test_case,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName\">_dummy1,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\">expression&nbsp;</td><td class=\"PName\">test_expr,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\">missing&nbsp;</td><td class=\"PName\">_dummy2&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\">.</td></tr></table></td><td class=\"PAfterParameters\">);</td></tr></table></div><div class=\"TTSummary\">Accepts same arguments as ut test, but returns you an expression with all parts expanded. Might be useful for debugging your script.</div></div>"});