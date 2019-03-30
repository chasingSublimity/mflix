import MoviesDAO from "../src/dao/moviesDAO"

const badObjectId = "helloworld"

describe("Get Comments", async () => {
  beforeAll(async () => {
    await MoviesDAO.injectDB(global.mflixClient)
  })

  test.only("Handles invalid ID error correctly", async () => {
    const response = await MoviesDAO.getMovieByID(badObjectId)
    expect(response).toBeNull()
  })
})
