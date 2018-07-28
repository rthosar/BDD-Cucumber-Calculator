import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
monochrome=true,
dryRun=false,
features={"classpath:calc"},
glue={"com.bdd.specs"},
plugin={"html:myhtml","json:myjson.json"}
//tags={"@s1"}
)
public class BddTestRunner1 {

}
