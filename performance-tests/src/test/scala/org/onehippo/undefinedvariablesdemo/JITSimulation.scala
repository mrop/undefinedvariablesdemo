package org.onehippo.undefinedvariablesdemo

import io.gatling.core.Predef.{Simulation, _}
import io.gatling.http.Predef._

import scala.concurrent.duration._

class JITSimulation extends Simulation {

  val httpProtocol = http
          .baseURL("http://localhost:8080")

  val headers_0 = Map("Pragma" -> "no-cache")

  val headers_1 = Map("Upgrade-Insecure-Requests" -> "1")

  val jit = scenario("JITCompilationSimulation")
          .exec(http("JITCompilation")
          .get("/site/defined"))
          .pause(7)

  setUp(
    jit.inject(constantUsersPerSec(4) during(30 seconds))
  ).protocols(httpProtocol)


}
