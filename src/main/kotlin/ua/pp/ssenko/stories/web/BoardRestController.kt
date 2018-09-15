package ua.pp.ssenko.stories.web

import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import ua.pp.ssenko.stories.service.BoardService

@RestController
@RequestMapping("/api")
class BoardRestController (
        val boardService: BoardService
) {
}