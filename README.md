# Running locally

This project uses the Maven Cargo plugin to run Essentials, the CMS and site locally in Tomcat.
From the project root folder, execute:

  mvn clean verify
  mvn -P cargo.run

Access the jsp where variables have been defined at http://localhost:8080/site/defined and
the jsp where the variables are undefined at http://localhost:8080/site/defined .

# Performance Tests

From the performance-tests folder, execute:

mvn clean install


# Results

The results from a run on my machine ( Mac Book Pro, 2,5 GHz Intel Core i7, 16 GB 1600 MHz DDR3 ):

* [Defined variables|./results/definedvariablessimulation-1448660262189/index.html]
* [Undefined variables|./results/undefinedvariablessimulation-1448660371839/index.html]

