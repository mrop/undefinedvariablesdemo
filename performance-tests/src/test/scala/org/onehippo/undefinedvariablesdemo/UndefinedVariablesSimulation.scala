package org.onehippo.undefinedvariablesdemo

import io.gatling.core.Predef.Simulation

import io.gatling.core.Predef._
import io.gatling.http.Predef._

import scala.concurrent.duration._

class UndefinedVariablesSimulation extends Simulation {

  val httpProtocol = http
          .baseURL("http://localhost:8080")

  val headers_0 = Map("Pragma" -> "no-cache")

  val headers_1 = Map("Upgrade-Insecure-Requests" -> "1")

  val undefined = scenario("UndefinedVariablesSimulation").exec(http("Undefined")
          .get("/site/undefined"))
          .pause(7)


  def steps(users:Int, s:Int) = (1 to users).toList.flatMap(i =>
    List(
      constantUsersPerSec(i) during(s seconds)
    )
  )

  val users=10
  val stepTime = 10

  setUp(
    undefined.inject(steps(users,stepTime))
  ).protocols(httpProtocol)


}
