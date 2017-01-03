package hello;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.concurrent.atomic.AtomicLong;

import org.springframework.ui.ModelMap;

@RestController
public class GreetingController {

    private static final String template = "Hello, %s!";
    private final AtomicLong counter = new AtomicLong();

    @RequestMapping(value="/greeting", method=RequestMethod.GET)
    public String greetingForm(Model model) {
        model.addAttribute("greeting", new Greeting());
        return "greeting";
    }

    @RequestMapping(value="/greeting", method=RequestMethod.POST)
    public String greetingSubmit(@ModelAttribute Greeting greeting, Model model) {
        model.addAttribute("greeting", greeting);
        return "result";
    }

    /**
     * @RestController
     * 获取 json 数据
     * @param name
     * @return model
     *
     * $ curl localhost:8080/api/test2.json
     * {"value":"World"}
     * $ curl localhost:8080/api/test2.json?name=2
     * {"value":"2"}
     * 不限制 method
     */
    @ResponseBody
    @RequestMapping("/api/test2.json")
    public ModelMap greeting(@RequestParam(value="name", defaultValue="World") String name) {
        ModelMap model = new ModelMap();
        System.out.println("value " + name);
        model.addAttribute("value", name);
        return model;
    }

    /**
     * @Controller
     * 发送 form 数据
     * @param greeting
     * @return String
     *
     * POST FORM
     * $ curl -d "id=2&content=Maoyan" http://localhost:8080/api/test.form
     * id=2&content=Maoyan
     */
    @ResponseBody
    @RequestMapping(value="/api/test.form", method=RequestMethod.POST)
    public String printForm(Greeting greeting) {
        System.out.println("Hello, greeting form");
        System.out.println(greeting.getContent());
        System.out.println(greeting.getId());
        String result = "id=" + greeting.getId() + "&content=" + greeting.getContent();
        System.out.println(result);
        return result;
    }

    /**
     * @Controller
     * 发送 json 数据
     * @param model
     * @return ModalMap
     *
     * $ curl -H "Content-Type: application/json" -X POST -d '{"id":13313,"content":"dfasdf"}' http://localhost:8080/api/test.json
     * {"id":13313,"content":"dfasdf"}
     */
    @ResponseBody
    @RequestMapping(value="/api/test.json")
    public ModelMap printJson(@RequestBody ModelMap model) {
        System.out.println("Hello, model");
        System.out.println(model);
        // String message = "Welcome to home page";
        // model.addAttribute("message", message);
        System.out.println(model.get("id")); // if not id, it will be null
        return model;
    }

}
