package ua.pp.ssenko.stories.web

import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestMethod
import java.security.Principal

@Controller
class WebController {

    @RequestMapping(value = ["/"], method = [RequestMethod.GET])
    fun index() = "index.html"

}