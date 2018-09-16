package ua.pp.ssenko.stories.web

import getEmail
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import ua.pp.ssenko.stories.service.BoardDto
import ua.pp.ssenko.stories.service.BoardService
import java.security.Principal

@RestController
@RequestMapping("/api")
class BoardRestController (
        val boardService: BoardService
) {
    @PostMapping("/board")
    fun createBoard(@RequestBody board: BoardDto, principal: Principal) {
        boardService.addBoard(principal.getEmail(), board)
    }

}
