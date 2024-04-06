var randomPattern = () =>
{
    var possiblePatterns = ['L','U','N','U','N'];
    var randomPattern = '';
    var randomIndex;
    for(var i = 0;i < possiblePatterns.length;i++)
    {
         randomIndex = Math.floor(Math.random() * 5);
         randomPattern += possiblePatterns[randomIndex];
    }
    return randomPattern;
}
var getCaptcha = (customPattern) =>
{
  var pattern;
  if(customPattern)
  {
      pattern = customPattern;
  }
  else
  {
      pattern = randomPattern();
  }
  
  var captcha = '';
  pattern = pattern.split('');
  for(var i = 0;i < pattern.length;i++)
  {
     captcha += getRandomNumORChar(pattern[i]);
  } 
  return captcha;
}

var getRandomNumORChar = (char) =>
{
   char = char.trim();
   //char = char.toLowerCase();
   var maxRange , minRange;
   switch(char.toLowerCase())
   {
      case 'n':
               return  Math.floor(Math.random() * 10);
               break;
      case 'u':
               minRange = 65;
               maxRange = 90;
               break;
      case 'l':
               minRange = 97;
               maxRange = 122;
   }
   var randomAsciiNum =  Math.round(Math.random() * (maxRange - minRange) + minRange);
   return  String.fromCharCode(randomAsciiNum);
}