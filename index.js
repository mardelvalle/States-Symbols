var states = {
  // create the data that we will be using
  "alabama"  : {
    "state_dog":"none",
    "state_bird":"northern flicker and the eastern wild turkey",
    "state_tree": "southern longleaf pine",
    "state_flower":"oak-leaf hydreangea and camellia",
    "state_mineral":"marble",
    "state_motto":"we dare defend our rights",
    "state_song":"alabama"
  },
  "alaska" : {
    "state_dog":"alaskan malamute",
    "state_bird":"willow ptarmigan",
    "state_tree": "sitka spruce",
    "state_flower":"alpine gorget-me-not",
    "state_mineral":"gold",
    "state_motto":"north to the future",
    "state_song":"alaska's flag"
  },
  "arizona" : {
    "state_dog":"none",
    "state_bird":"cactus wren",
    "state_tree": "palo verde",
    "state_flower":"saguaro cactus blossom",
    "state_mineral":"copper",
    "state_motto":"ditat deus",
    "state_song":"arizona and arizona march song"
  },
  "arkansas" : {
    "state_dog":"none",
    "state_bird":"mockingbird",
    "state_tree": "pine",
    "state_flower":"apple blossom",
    "state_mineral":"quartz crystal and bauxite",
    "state_motto":"the people rule",
    "state_song":"arkansas, oh arkansas, the arkansas traveler and arkansas you run deep in me"
  },
  "california" : {
    "state_dog":"none",
    "state_bird":"california valley quail",
    "state_tree": "california redwood",
    "state_flower":"california poppy",
    "state_mineral":"serpentine and gold",
    "state_motto":"eureka",
    "state_song":"i love you california"
  },
  "colorado"  : {
    "state_dog":"all shelter breeds",
    "state_bird":"lark bunting",
    "state_tree": "colorado blue spruce",
    "state_flower":"rocky mountain columbine",
    "state_mineral":"yule marble",
    "state_motto":"nil sine numine",
    "state_song":"where the columbines grow and rocky mountain high"
  },
  "connecticut" : {
    "state_dog":"none",
    "state_bird":"american robin",
    "state_tree": "the charter oak",
    "state_flower":"mountain laurel",
    "state_mineral":"almandine garnet",
    "state_motto":"qui transtulit sustinet",
    "state_song":"yankee doodle, the nutmeg, ballroom polka and beautiful connecticut waltz"
  },
  "delaware" : {
    "state_dog":"golden retriever",
    "state_bird":"blue hen chicken",
    "state_tree": "american holly",
    "state_flower":"peach blossom",
    "state_mineral":"sillimanite",
    "state_motto":"liberty and independence",
    "state_song":"our delawar"
  },
  "florida" : {
    "state_dog":"none",
    "state_bird":"mockingbird",
    "state_tree": "sabal palm",
    "state_flower":"orange blossom",
    "state_mineral":"none",
    "state_motto":"in god we trust",
    "state_song":"the swanee river and i am florida"
  },
  "georgia" : {
    "state_dog":"golden retriever",
    "state_bird":"brown thrasher and the bobwhite quail",
    "state_tree": "live oak",
    "state_flower":"cherokee rose and native azalea",
    "state_mineral":"staurolite",
    "state_motto":"wisdom, justice, and moderation",
    "state_song":"georgia on my mind and our georgia"
  },
  "hawaii" : {
    "state_dog":"none",
    "state_bird":"nene",
    "state_tree": "kukui",
    "state_flower":"pua aloalo and hinahina",
    "state_mineral":"none",
    "state_motto":"ua mau ke ea o ka aina i ka pono",
    "state_song":"hawai pono"
  },
  "idaho" : {
    "state_dog":"none",
    "state_bird":"peregrine falcon and the mountain blue ird",
    "state_tree": "western white pine",
    "state_flower":"syringa",
    "state_mineral":"none",
    "state_motto":"esto perpetua",
    "state_song":"her we have idaho"
  },
  "illinois" : {
    "state_dog":"none",
    "state_bird":"northern cardinal",
    "state_tree": "white oak",
    "state_flower":"violet",
    "state_mineral":"fluorite",
    "state_motto":"state sovereignty, national union",
    "state_song":"illinois"
  },
  "indiana" : {
    "state_dog":"none",
    "state_bird":"northern cardinal",
    "state_tree": "tulip poplar",
    "state_flower":"peony",
    "state_mineral":"limestone",
    "state_motto":"crossroads of america",
    "state_song":"on the banks of the wabash far away"
  },
  "iowa" : {
    "state_dog":"none",
    "state_bird":"eastern goldfinch",
    "state_tree": "oak",
    "state_flower":"wild rose",
    "state_mineral":"geode",
    "state_motto":"our liberties we prize",
    "state_song":"song of iowa"
  },
  "kansas" : {
    "state_dog":"cairn terrier",
    "state_bird":"western meadowlark",
    "state_tree": "cottonwood",
    "state_flower":"wild native sunflower",
    "state_mineral":"none",
    "state_motto":"ad astra per aspera",
    "state_song":"home on the range and kansas march songs"
  },
  "kentucky" : {
    "state_dog":"none",
    "state_bird":"northern cardinal",
    "state_tree": "tulip poplar",
    "state_flower":"goldenrod",
    "state_mineral":"coal and kentucky agate",
    "state_motto":"united we stand, divided we fall",
    "state_song":"my old kentucky home and blue moon of kentucky"
  },
  "louisiana" : {
    "state_dog":"catahoula leaopard dog",
    "state_bird":"brown pelican",
    "state_tree": "bald cypress",
    "state_flower":"magnolia and lousiana iris",
    "state_mineral":"agate",
    "state_motto":"union, justice and confidence",
    "state_song":"louisiana my home sweet home, the gifts of earth, you are my sunshine and give me louisiana"
  },
  "maine" : {
    "state_dog":"none",
    "state_bird":"black-capped chickadee",
    "state_tree": "white pine",
    "state_flower":"white pine cone and tassel",
    "state_mineral":"none",
    "state_motto":"dirigo",
    "state_song":"state of main song"
  },
  "maryland" : {
    "state_dog":"chesapeake bay retriever",
    "state_bird":"baltimore oriole",
    "state_tree": "white oak",
    "state_flower":"black-eyed susan",
    "state_mineral":"none",
    "state_motto":"fatti maschii parole famine",
    "state_song":"maryland my maryland"
  },
  "massachusetts" : {
    "state_dog":"boston terrier",
    "state_bird":"wild turkey and the black-capped chickadee",
    "state_tree": "american elm",
    "state_flower":"mayflower",
    "state_mineral":"granite and babingtonite",
    "state_motto":"by the sword we seek peace, but peace only under liberty",
    "state_song":"massachusetts because of you our land is free, ode to massachusetts, say hello to someone from massachusetts and all hail to massachusetts"
  },
  "michigan" : {
    "state_dog":"none",
    "state_bird":"robin redbreast",
    "state_tree": "eastern white pine",
    "state_flower":"apple blossom and dwarf lake iris",
    "state_mineral":"petoskey stone",
    "state_motto":"si quaeris peninsulam amoenam, circumspice",
    "state_song":"my michigan"
  },
  "minnesota" : {
    "state_dog":"none",
    "state_bird":"common loon",
    "state_tree": "red pine",
    "state_flower":"pink and white lady slipper",
    "state_mineral":"none",
    "state_motto":"l'etoile du nord",
    "state_song":"hail minnesota"
  },
  "mississippi" : {
    "state_dog":"none",
    "state_bird":"wood duck and the mockingbird",
    "state_tree": "magnolia",
    "state_flower":"coreopsis",
    "state_mineral":"petrified wood",
    "state_motto":"virtute et armis",
    "state_song":"go mississippi"
  },
  "missouri" : {
    "state_dog":"none",
    "state_bird":"eastern bluebird and the bobwhite quail",
    "state_tree": "flowering dogwood",
    "state_flower":"white hawthorn blossom",
    "state_mineral":"mozarkite and galena",
    "state_motto":"salus populi suprema lex esto",
    "state_song":"the missouri waltz"
  },
  "montana" : {
    "state_dog":"none",
    "state_bird":"western meadowlark",
    "state_tree": "ponderosa pine",
    "state_flower":"bitterroot",
    "state_mineral":"none",
    "state_motto":"oro y plata",
    "state_song":"montana, montaina melody, and montana lullaby"
  },
  "nebraska" : {
    "state_dog":"none",
    "state_bird":"western meadowlark",
    "state_tree": "cottonwood",
    "state_flower":"goldenrod",
    "state_mineral":"prairie agate",
    "state_motto":"equality before the law",
    "state_song":"a place like nebraska and beautiful nebraska"
  },

  "nevada" : {
    "state_dog":"none",
    "state_bird":"mountain bluebird",
    "state_tree": "bristlecone pine and single-leaf pinon",
    "state_flower":"sagebrush",
    "state_mineral":"sandstone and silver",
    "state_motto":"all for our country",
    "state_song":"silver state fanfare and home means nevada"
  },
  "new hampshire" : {
    "state_dog":"chinook",
    "state_bird":"purple finch",
    "state_tree": "white birch",
    "state_flower":"purple lilac, and pink lady's slipper",
    "state_mineral":"granite and beryl",
    "state_motto":"live free or die",
    "state_song":"oh new hampshire you're my home, new hampshire my new hampshire, the new hapshire state march and live free or die"
  },
  "new jersey" : {
    "state_dog":"none",
    "state_bird":"eastern goldenfinch",
    "state_tree": "northern red oak",
    "state_flower":"violet",
    "state_mineral":"none",
    "state_motto":"liberty and prosperity",
    "state_song":"no official songs"
  },
  "new mexico" : {
    "state_dog":"none",
    "state_bird":"greater roadrunner",
    "state_tree": "dogwood",
    "state_flower":"yucca",
    "state_mineral":"none",
    "state_motto":"crescit eundo",
    "state_song":"asi es nuevo mejico, land of enchantment, under new mexico skies, o fair new mexico and new mexico mi lindo nuevo mexico"
  },
  "new york" : {
    "state_dog":"service dogs",
    "state_bird":"eastern bluebird",
    "state_tree": "pinon pine and the sugar maple",
    "state_flower":"rose",
    "state_mineral":"none",
    "state_motto":"excelsior",
    "state_song":"i love new york"
  },
  "north carolina" : {
    "state_dog":"plott hound",
    "state_bird":"northern cardinal",
    "state_tree": "fraser fir and the pine tree",
    "state_flower":"lilac and dogwood",
    "state_mineral":"gold and granite",
    "state_motto":"esse quam videri",
    "state_song":"the old north state"
  },
  "north dakota" : {
    "state_dog":"none",
    "state_bird":"western meadowlark",
    "state_tree": "american elm",
    "state_flower":"wild prairie rose",
    "state_mineral":"none",
    "state_motto":"liberty and union now and forever one and inseparable",
    "state_song":"flickertail march and north dakota hymn"
  },
  "ohio" : {
    "state_dog":"none",
    "state_bird":"northern cardinal",
    "state_tree": "ohio buckeye",
    "state_flower":"white trillium and red carnation",
    "state_mineral":"none",
    "state_motto":"with god all things are possible",
    "state_song":"beatiful ohio and hang on sloopy"
  },
  "oklahoma" : {
    "state_dog":"none",
    "state_bird":"wild turkey and the scissor-tailed flycatcher",
    "state_tree": "redbud",
    "state_flower":"mistletoe, oklahoma rose, and indian blanket",
    "state_mineral":"hourglass selenite crystal and rose rock",
    "state_motto":"labor omnia vincit",
    "state_song":"oklahoma, oklahoma hills, do you realize, and oklahoma my native land"
  },
  "oregon" : {
    "state_dog":"none",
    "state_bird":"western meadowlark",
    "state_tree": "douglas fir and metasequoia",
    "state_flower":"oregon grape",
    "state_mineral":"thunderegg",
    "state_motto":"alis volat propriis",
    "state_song":"oregon, my oregon"
  },
  "pennsylvania" : {
    "state_dog":"great dane",
    "state_bird":"ruffed grouse",
    "state_tree": "eastern hemlock",
    "state_flower":"mountain laurel and penngift crownvetch",
    "state_mineral":"none",
    "state_motto":"virtue liberty and independence",
    "state_song":"pennsylvania"
  },
  "rhode island" : {
    "state_dog":"none",
    "state_bird":"rhode island red",
    "state_tree": "red maple",
    "state_flower":"violet",
    "state_mineral":"bowenite and cumberlandite",
    "state_motto":"hope",
    "state_song":"rhode island it;s for me"
  },
  "south carolina" : {
    "state_dog":"boykin spaniel",
    "state_bird":"carolina wren and the wild turkey",
    "state_tree": "sabal palmetto",
    "state_flower":"goldenrod and yellow jessamine",
    "state_mineral":"blue granite",
    "state_motto":"dum spiro spero animis opibusque parati",
    "state_song":"south carolina on my mind, and carolina"
  },
  "south dakota" : {
    "state_dog":"none",
    "state_bird":"ring-necked pheasant",
    "state_tree": "back hills spruce",
    "state_flower":"american pasque",
    "state_mineral":"black hills gold",
    "state_motto":"under god the people rule",
    "state_song":"hail, south dakota"
  },
  "tennessee" : {
    "state_dog":"shelter dogs",
    "state_bird":"mockingbird and the bobwhite quail",
    "state_tree": "tennessee eastern red cedar, and the yellowwood tree",
    "state_flower":"passion flower and tennessee coneflower",
    "state_mineral":"limestone and agate",
    "state_motto":"agriculture and commerce",
    "state_song":"tennessee, smoky mountain rain, the pride of tennessee, a tennessee bicentenial rap, rocky top and tennessee waltz"
  },
  "texas" : {
    "state_dog":"blue lacy",
    "state_bird":"mockingbird",
    "state_tree": "pecan tree",
    "state_flower":"nymphaea texas and blue bonnet",
    "state_mineral":"petrified palmwood and silver",
    "state_motto":"friendship",
    "state_song":"bluebonnets and texas our texas"
  },
  "utah" : {
    "state_dog":"none",
    "state_bird":"california gull",
    "state_tree": "quaking aspen and blue spruce",
    "state_flower":"sego lily",
    "state_mineral":"coal and cooper",
    "state_motto":"industry",
    "state_song":"utah we love thee and utah this is the place"
  },
  "vermont" : {
    "state_dog":"none",
    "state_bird":"hermit thrush",
    "state_tree": "sugar maple",
    "state_flower":"red clover",
    "state_mineral":"talc, marble, granite and slate",
    "state_motto":"freedom and unity",
    "state_song":"these green mountains"
  },
  "virginia" : {
    "state_dog":"foxhoud",
    "state_bird":"northern cardinal",
    "state_tree": "flowering dogwood",
    "state_flower":"coast rhododendron",
    "state_mineral":"nelsonite",
    "state_motto":"sic semper tyrannis",
    "state_song":"sweet virginia breeze, our great virginia, and carry me back to old virginia"
  },
  "washington" : {
    "state_dog":"siberian husky",
    "state_bird":"willow goldfinch",
    "state_tree": "western hemlock",
    "state_flower":"rhododendron",
    "state_mineral":"palouse falls",
    "state_motto":"washington into the future",
    "state_song":"washington my home and roll on columbia roll on"
  },
  "west virginia" : {
    "state_dog":"none",
    "state_bird":"northern cardinal",
    "state_tree": "sugar maple",
    "state_flower":"",
    "state_mineral":"bituminous coal",
    "state_motto":"mountaineers are always free",
    "state_song":"west virginia my home sweet home, take me home country roads, this is west virginia and the west virginia hills"
  },
  "wisconsin" : {
    "state_dog":"american water spaniel",
    "state_bird":"american robin",
    "state_tree": "sugar maple",
    "state_flower":"wood violet",
    "state_mineral":"red granite and galena",
    "state_motto":"forward",
    "state_song":"oh wisconsin, land of my dreams and the wisconsin waltz"
  },
  "wyoming" : {
    "state_dog":"none",
    "state_bird":"western meadowlark",
    "state_tree": "plains cotton wood",
    "state_flower":"indian paintbrush",
    "state_mineral":"none",
    "state_motto":"equal rights",
    "state_song":"wyoming"
  }
};

exports.handler = function (event, context) {
  try {
    console.log("event.session.application.applicationId=amzn1.ask.skill.be4e9803-dbb8-433a-a527-fe00bfb93e9e" + event.session.application.applicationId);


    if (event.session.application.applicationId !== "") {
      context.fail("Invalid Application ID");
    }
    if (event.session.new) {
      onSessionStarted({requestId: event.request.requestId}, event.session);
    }
    if (event.request.type === "LaunchRequest") {
      onLaunch(event.request,
        event.session,
        function callback(sessionAttributes, speechletResponse) {
          context.succeed(buildResponse(sessionAttributes, speechletResponse));
        });
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

    function onSessionStarted(sessionStartedRequest, session) {
    }

    function onLaunch(launchRequest, session, callback) {
      getWelcomeResponse(callback);
    }

    function onIntent(intentRequest, session, callback) {

      var intent = intentRequest.intent;
      var intentName = intentRequest.intent.name;

      if (intentName == "StateIntent"){
        handleStateResponse(intent, session, callback);
      }else if (intentName == "StateSymbolRandom"){
        handleRandomSymbolResponse(intent, session, callback);
      }else if (intentName == "StateDog"){
        handleStateDogResponse(intent, session, callback);
      }else if (intentName == "StateBird"){
        handleStateBirdResponse(intent, session, callback);
      }else if (intentName == "StateDog"){
        handleStateMottoResponse(intent, session, callback);
      }else if (intentName == "StateMotto"){
        handleStateMottoResponse(intent, session, callback);
      }else if (intentName == "StateFlower"){
        handleStateFlowerResponse(intent, session, callback);
      }else if (intentName == "StateTree"){
        handleStateTreeResponse(intent, session, callback);
      }else if (intentName == "StateSong"){
        handleStateSongResponse(intent, session, callback);
      }else if (intentName == "AMAZON.YesIntent"){
        //going through the intents
        handleYesResponse(intent, session, callback);
      }else if (intentName == "AMAZON.NoIntent") {
        handleNoResponse(intent, session, callback);
      }else if (intentName == "AMAZON.HelpIntent"){
        handleGetHelpRequest(intent, session, callback);
      }else if (intentName == "AMAZON.StopIntent"){
      handleFinishSessionRequest(intent, session, callback);
    }else if (intentName == "AMAZON.CancelIntent"){
      handleFinishSessionRequest(intent, session, callback);
    }else{
      throw "Invalid intent";
    }

  }
  function onSessionEnded(sessionEndedRequest, session) {

  }
  function getWelcomeResponse(callback) {
    var speechOutput =`Welcome to state symbols. Give me the name of a state and I will give you symbols used by the state`+`I only have information about the states in the United States of America`;
    var reprompt =`Please tell me the state you want to know about`;
    var header= `State Symbols`;
    var shouldEndSession = false;
    var sessionAttributes ={
      "speechOutput" : speechOutput,
      "repromptText" : reprompt
    };
    callback(sessionAttributes, buildSpeechletResponse(header, speechOutput, reprompt, shouldEndSession));
  }
  function   handleStateResponse(intent, session, callback){
    var state = intent.slots.State.value.toLowerCase(  );
    if (!states[state]){
      var speechOutput= `I couldn't find that state`;
      var repromptText = `Please try again`;
      var header =`not found`;
    }else{
      var state_dog = states[state].state_dog;
      var state_bird = states[state].state_bird;
      var state_tree = states[state].state_tree;
      var state_flower = states[state].state_flower;
      var state_mineral = states[state].state_mineral;
      var state_motto = states[state].state_motto;
      var state_song = states[state].state_song;
      speechOutput = `${capitalizeFirst(state)}'s the state bird is the ${state_bird}, the state dog is the ${state_dog}, the state tree is the ${state_tree}, the state flower is the ${state_flower}, the state mineral and rocks are ${state_mineral}, the state motto is ${state_motto}, the state song is ${state_song}. Would you like to learn about another state?`;
      repromptText = `Would you like to learn about another state?`;
      header =capitalizeFirst(state);
    }
    var shouldEndSession=false;
    callback(session.attributes, buildSpeechletResponse(header, speechOutput, repromptText, shouldEndSession));


  }
  function   handleRandomSymbolResponse(intent, session, callback){
    var state = intent.slots.State.value.toLowerCase(  );
    if (!states[state]){
      var speechOutput="I couldn't find that state";
      var repromptText = "Please try again";
      var header ="not found";
    }else{
      var symbol = (Math.floor(Math.random()*8));
      if(symbol==1){
        var state_dog = states[state].state_dog;
        speechOutput = capitalizeFirst(state)+"'s the state dog is the "+ state_dog;
      }
      else if(symbol==2){
        var state_bird = states[state].state_bird;
        speechOutput =capitalizeFirst(state)+"'s state bird is the " + state_bird;
      }
      else if (symbol==3){
        var state_tree = states[state].state_tree;
        speechOutput=capitalizeFirst(state)+"'s state tree is the " + state_tree;
      }
      else if (symbol==4){
        var state_flower = states[state].state_flower;
        speechOutput=capitalizeFirst(state)+"'s state flower is the " + state_flower;
      }
      else if (symbol==5){
        var state_mineral = states[state].state_mineral;
        speechOutput=capitalizeFirst(state)+"'s state mineral is the " + state_mineral;
      }
      else if (symbol==6){
        var state_motto = states[state].state_motto;
        speechOutput=capitalizeFirst(state)+"'s state motto is " + state_motto;
      }
      else{
      var state_song = states[state].state_song;
      speechOutput=capitalizeFirst(state)+"'s state song is " + state_song;
    }
    repromptText = `Would you like to learn about another state?`;
    header =capitalizeFirst(state);
    var shouldEndSession=false;
    callback(session.attributes, buildSpeechletResponse(header, speechOutput, repromptText, shouldEndSession));

   }
  }
    function handleStateDogResponse (intent, session, callback){
          var state = intent.slots.State.value.toLowerCase(  );
      if (!states[state]){
        var speechOutput=`I couldn't find that`;
        var repromptText = `Please try again`;
        var header =`not found`;
      }else{
        var state_dog = states[state].state_dog;
        speechOutput = capitalizeFirst(state)+"'s state dog is the " + state_dog +". Would you like to learn about another state?";
        repromptText = `Would you like to learn about another state?`;
        header =capitalizeFirst(state);
      }
      var shouldEndSession=false;
      callback(session.attributes, buildSpeechletResponse(header, speechOutput, repromptText, shouldEndSession));
    }
    function handleStateBirdResponse (intent, session, callback){
          var state = intent.slots.State.value.toLowerCase(  );
      if (!states[state]){
        var speechOutput=`I couldn't find that`;
        var repromptText = `Please try again`;
        var header =`not found`;
      }else{
        var state_bird = states[state].state_bird;
        speechOutput = capitalizeFirst(state)+"'s state bird is the " + state_bird +". Would you like to learn about another state?";
        repromptText = `Would you like to learn about another state?`;
        header =capitalizeFirst(state);
      }
      var shouldEndSession=false;
      callback(session.attributes, buildSpeechletResponse(header, speechOutput, repromptText, shouldEndSession));
    }
    function handleStateMineralResponse (intent, session, callback){
          var state = intent.slots.State.value.toLowerCase(  );
      if (!states[state]){
        var speechOutput=`I couldn't find that`;
        var repromptText = `Please try again`;
        var header =`not found`;
      }else{
        var state_mineral = states[state].state_mineral;
        speechOutput = capitalizeFirst(state)+"'s state mineral is the " + state_mineral +". Would you like to learn about another state?";
        repromptText = `Would you like to learn about another state?`;
        header =capitalizeFirst(state);
      }
      var shouldEndSession=false;
      callback(session.attributes, buildSpeechletResponse(header, speechOutput, repromptText, shouldEndSession));
    }
    function handleStateMottoResponse (intent, session, callback){
          var state = intent.slots.State.value.toLowerCase(  );
      if (!states[state]){
        var speechOutput=`I couldn't find that`;
        var repromptText = `Please try again`;
        var header =`not found`;
      }else{
        var state_motto = states[state].state_motto;
        speechOutput = capitalizeFirst(state)+"'s state motto is " + state_motto +". Would you like to learn about another state?";
        repromptText = `Would you like to learn about another state?`;
        header =capitalizeFirst(state);
      }
      var shouldEndSession=false;
      callback(session.attributes, buildSpeechletResponse(header, speechOutput, repromptText, shouldEndSession));
    }
    function handleStateFlowerResponse (intent, session, callback){
          var state = intent.slots.State.value.toLowerCase(  );
      if (!states[state]){
        var speechOutput=`I couldn't find that `;
        var repromptText = `Please try again`;
        var header =`not found`;
      }else{
        var state_flower = states[state].state_flower;
        speechOutput = capitalizeFirst(state)+"'s state flower is the " + state_flower +". Would you like to learn about another state?";
        repromptText = `Would you like to learn about another state?`;
        header =capitalizeFirst(state);
      }
      var shouldEndSession=false;
      callback(session.attributes, buildSpeechletResponse(header, speechOutput, repromptText, shouldEndSession));
    }
    function handleStateTreeResponse (intent, session, callback){
          var state = intent.slots.State.value.toLowerCase(  );
      if (!states[state]){
        var speechOutput=`I couldn't find that state`;
        var repromptText = `Please try again`;
        var header =`not found`;
      }else{
        var state_tree = states[state].state_tree;
        speechOutput = capitalizeFirst(state)+"'s state tree is the " + state_tree +". Would you like to learn about another state?";
        repromptText = `Would you like to learn about another state?`;
        header =capitalizeFirst(state);
      }
      var shouldEndSession=false;
      callback(session.attributes, buildSpeechletResponse(header, speechOutput, repromptText, shouldEndSession));
    }
    function handleStateSongResponse (intent, session, callback){
          var state = intent.slots.State.value.toLowerCase(  );
      if (!states[state]){
        var speechOutput=`I couldn't find that`;
        var repromptText = `Please try again`;
        var header =`not found`;
      }else{
        var state_song = states[state].state_song;
        speechOutput = capitalizeFirst(state)+"'s state song is " + state_song +". Would you like to learn about another state?";
        repromptText = `Would you like to learn about another state?`;
        header =capitalizeFirst(state);
      }
      var shouldEndSession=false;
      callback(session.attributes, buildSpeechletResponse(header, speechOutput, repromptText, shouldEndSession));
    }
  function handleYesResponse(intent, session, callback){
    var speechOutput="Which state would you like to learn more about now?";
    var repromptText=speechOutput;
    var shouldEndSession=false;
    callback(session.attributes, buildSpeechletResponseWithoutCard(speechOutput,repromptText,shouldEndSession));
  }
  function handleNoResponse(intent, session, callback){
    handleFinishSessionRequest(intent, session, callback);
  }
  function handleGetHelpRequest(intent, session, callback) {
    // Ensure that session.attributes has been initialized
    if (!session.attributes) {
      session.attributes = {};

    }
    var speechOutput="Learn about the symbols of each state from Alabama to Wyoming";
    var repromptText="speechOutput";
    var shouldEndSession=false;
    callback(session.attributes,buildSpeechletResponseWithoutCard(speechOutput, repromptText,shouldEndSession));
  }

  function handleFinishSessionRequest(intent, session, callback) {
    // End the session with a "Good bye!" if the user wants to quit the game
    callback(session.attributes,
      buildSpeechletResponseWithoutCard("Good bye I hope you learned a lot!", "", true));
    }

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
      return s.charAt(0).toUpperCase()+s.slice(1);
    }
