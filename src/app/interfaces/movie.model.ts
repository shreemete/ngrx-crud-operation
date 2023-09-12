export class Movie {
    movieName!: string
    movieDetails!: string
    movieEarning!: number
    id!: number

    constructor(name: string, details: string, earning: number) {
        this.movieName = name
        this.movieDetails = details,
            this.movieEarning = earning
    }
}