var reindeers = {
  // create the data that we will be using
  "dasher" : {
    "personality_trait": "loves running",
    "skill":"good girl"
  },
  "comet" : {
    "personality_trait": "log lover",
    "skill":"good girl"
  },
}
// Route the incoming request based on type (LaunchRequest, IntentRequest,
// etc.) The JSON body of the request is provided in the event parameter.
exports.handler = function (event, context) {
    try {
        console.log("event.session.application.applicationId=" + event.session.application.applicationId);

        /**
         * Uncomment this if statement and populate with your skill's application ID to
         * prevent someone else from configuring a skill that sends requests to this function.
         */

    if (event.session.application.applicationId !== "arn:aws:lambda:us-east-1:892643686409:function:rein") {
        context.fail("Invalid Application ID");
     }
        if (event.session.new) {
            onSessionStarted({requestId: event.request.requestId}, event.session);
        }
        // if the request intent was at the launch request
        if (event.request.type === "LaunchRequest") {
            onLaunch(event.request,
                event.session,
                function callback(sessionAttributes, speechletResponse) {
                    context.succeed(buildResponse(sessionAttributes, speechletResponse));
                });
// other wise at the request it will check what kind of request was made
        } else if (event.request.type === "IntentRequest") {
            onIntent(event.request,
                event.session,
                function callback(sessionAttributes, speechletResponse) {
                    context.succeed(buildResponse(sessionAttributes, speechletResponse));
                });
        } else if (event.request.type === "SessionEndedRequest") {
            onSessionEnded(event.request, event.session);
            context.succeed();
        }
    } catch (e) {
        context.fail("Exception: " + e);
    }
};

/**
 * Called when the session starts.
 */
function onSessionStarted(sessionStartedRequest, session) {
    // add any session init logic here
}

/**
 * Called when the user invokes the skill without specifying what they want.
 */
 // what will the echo say when you start the skill
function onLaunch(launchRequest, session, callback) {
getWelcomeResponse(callback)
}

/**
 * Called when the user specifies an intent for this skill.
 */
function onIntent(intentRequest, session, callback) {

    var intent = intentRequest.intent
    var intentName = intentRequest.intent.name;

    // dispatch custom intents to handlers here
    // if specific intent do a specific block of code
if (intentName == "Reindeerintent"){
  handleReindeerResponse(intent, session, callback)

}else if (intentName == "AMAZON.YesIntent"){
  //going through the intents
  handleYesResponse(intent, session, callback)
  }else if (intentName == "AMAZON.NoIntent") {
handleNoResponse(intent, session, callback)
  }else if (intentName == "AMAZON.HelpIntent"){
    handleGetHelpRequest(intent, session, callback)
  }else if (intentName == "AMAZON.StopIntent"){
    handleFinishSessionRequest(intent, session, callback)
  }else if (intentName == "AMAZON.CancelIntent"){
    handleFinishSessionRequest(intent, session, callback)
  }else{
    throw "Invalid intent"
  }

}

/**
 * Called when the user ends the session.
 * Is not called when the skill returns shouldEndSession=true.
 */
function onSessionEnded(sessionEndedRequest, session) {

}

// ------- Skill specific logic -------

function getWelcomeResponse(callback) {
var speechOUtput ="welcome to reindeer fact"+"you will love it"
var repompt ="which do you want to know about"
var header= "Reindeer Facts"
var shouldEndSession = false
var sessionAttributes ={
  "speechOutput" : speechOutput,
  "repromptText" : reprompt
}
// the variables are calling the varariables above and will listen all the time in the session for these things
callback(sessionAttributes, buildSpeechletResponse(header, speechOutput, reprompt, shouldEndSession))
}
function   handleReindeerResponse(intent, session, callback){
  var reindeer = intent.slots.Rendeer.value.toLowerCase(  )
  if (!reindeers[reindeer]){
    var speechOutput="please try another"
    var repromptText = "try asking about another reindeer"
    var header ="not famous"
  }else{
    var personality_trait=reindeers[reindeer].personality_trait
    var skill = reindeers[reindeer].Skill
    var speechOutput = capitalizeFirst(reindeer)+""+personality_trait+"and"+skill+"want to learn more?"
    var repromptText = "do you want to hear about others?"
    var header =capitalizeFirst(reindeer)
  }
  var shouldEndSession=false
callback(session.attributes, buildSpeechletResponse(header, speechOutput, repromptText, shouldEndSession))


}
function handleYesResponse(intent, session, callback){
  var speechOutput="superb"
  var repromptText=speechOutput
  var shouldEndSession=false
  callback(session.attributes, buildSpeechletResponseWithoutCard(speechOutput,repromptText,shouldEndSession))
}
function handleNoResponse(intent, session, callback){
  handleFinishSessionRequest(intent, session, callback)
}
function handleGetHelpRequest(intent, session, callback) {
    // Ensure that session.attributes has been initialized
    if (!session.attributes) {
        session.attributes = {};

}
var speechOUtput="I know facts about the reindeer dasher prancer"
var repromptText="speechOutput"
var shouldEndSession=false
callback(session.attributes,buildSpeechletResponseWithoutCard(speechOutput, repromptText,shouldEndSession))
}

function handleFinishSessionRequest(intent, session, callback) {
    // End the session with a "Good bye!" if the user wants to quit the game
    callback(session.attributes,
        buildSpeechletResponseWithoutCard("Good bye!", "", true));
}


// ------- Helper functions to build responses for Alexa -------

// title is the title card output is what alexa will say reprompt will be what to say if human doen't talk and shouldend will say when to end session
// all functions basically end with this to check for somethign from these things
function buildSpeechletResponse(title, output, repromptText, shouldEndSession) {
    return {
        outputSpeech: {
            type: "PlainText",
            text: output
        },
        card: {
            type: "Simple",
            title: title,
            content: output
        },
        reprompt: {
            outputSpeech: {
                type: "PlainText",
                text: repromptText
            }
        },
        shouldEndSession: shouldEndSession
    };
}

function buildSpeechletResponseWithoutCard(output, repromptText, shouldEndSession) {
    return {
        outputSpeech: {
            type: "PlainText",
            text: output
        },
        reprompt: {
            outputSpeech: {
                type: "PlainText",
                text: repromptText
            }
        },
        shouldEndSession: shouldEndSession
    };
}

function buildResponse(sessionAttributes, speechletResponse) {
    return {
        version: "1.0",
        sessionAttributes: sessionAttributes,
        response: speechletResponse
    };
}
function capitalizeFirst(s){
  return s.charAt(0).toUpperCase()+s.slisce(1)
}
