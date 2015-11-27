var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "550",
        "ok": "548",
        "ko": "2"
    },
    "minResponseTime": {
        "total": "170",
        "ok": "170",
        "ko": "60009"
    },
    "maxResponseTime": {
        "total": "60009",
        "ok": "48477",
        "ko": "60009"
    },
    "meanResponseTime": {
        "total": "25890",
        "ok": "25765",
        "ko": "60009"
    },
    "standardDeviation": {
        "total": "20660",
        "ok": "20594",
        "ko": "0"
    },
    "percentiles1": {
        "total": "34858",
        "ok": "34543",
        "ko": "60009"
    },
    "percentiles2": {
        "total": "45895",
        "ok": "45891",
        "ko": "60009"
    },
    "percentiles3": {
        "total": "48157",
        "ok": "48136",
        "ko": "60009"
    },
    "percentiles4": {
        "total": "48449",
        "ok": "48427",
        "ko": "60009"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 155,
        "percentage": 28
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 4,
        "percentage": 1
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 389,
        "percentage": 71
    },
    "group4": {
        "name": "failed",
        "count": 2,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "3.625",
        "ok": "3.612",
        "ko": "0.013"
    }
},
contents: {
"req_undefined-ec0fc": {
        type: "REQUEST",
        name: "Undefined",
path: "Undefined",
pathFormatted: "req_undefined-ec0fc",
stats: {
    "name": "Undefined",
    "numberOfRequests": {
        "total": "550",
        "ok": "548",
        "ko": "2"
    },
    "minResponseTime": {
        "total": "170",
        "ok": "170",
        "ko": "60009"
    },
    "maxResponseTime": {
        "total": "60009",
        "ok": "48477",
        "ko": "60009"
    },
    "meanResponseTime": {
        "total": "25890",
        "ok": "25765",
        "ko": "60009"
    },
    "standardDeviation": {
        "total": "20660",
        "ok": "20594",
        "ko": "0"
    },
    "percentiles1": {
        "total": "34858",
        "ok": "34543",
        "ko": "60009"
    },
    "percentiles2": {
        "total": "45895",
        "ok": "45891",
        "ko": "60009"
    },
    "percentiles3": {
        "total": "48157",
        "ok": "48136",
        "ko": "60009"
    },
    "percentiles4": {
        "total": "48449",
        "ok": "48427",
        "ko": "60009"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 155,
        "percentage": 28
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 4,
        "percentage": 1
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 389,
        "percentage": 71
    },
    "group4": {
        "name": "failed",
        "count": 2,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "3.625",
        "ok": "3.612",
        "ko": "0.013"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
