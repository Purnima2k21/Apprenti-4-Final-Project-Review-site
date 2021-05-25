package controllers;


import models.Movies;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import services.MoviesService;

@RestController
@RequestMapping("/api/v1/movies")
public class MoviesController {
    private MoviesService moviesService;

    @Autowired
public MoviesController(MoviesService moviesService){this.moviesService = moviesService;}

    @GetMapping
public Iterable<Movies> findAll() {return moviesService.findAll();}
}

