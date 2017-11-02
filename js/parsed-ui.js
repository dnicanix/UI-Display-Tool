var inputContent;
var text, width, height, xpos, ypos;
var jsonData;
var newElement;

$(document).ready(function() {
    inputContent = sessionStorage.getItem("inputContent");
    jsonData = JSON.parse(inputContent);

    //buttons
   
    for(var i=0;i<jsonData.buttons.length;i++)
    {   
        var element = jsonData.buttons[i];
        text = element.text;
        width = element.width;
        height = element.height;
        xpos = element["x-pos"];
        ypos = element["y-pos"];
        
        newElement = document.createElement('button');  
        parse(text, width, height, xpos, ypos);
    }

    //textfields
 
    for(var i=0;i<jsonData.textfields.length;i++)
    {   
        var element = jsonData.textfields[i];
        text = element.text;
        width = element.width;
        height = element.height;
        xpos = element["x-pos"];
        ypos = element["y-pos"];
        
        newElement = document.createElement('INPUT'); 
        newElement.setAttribute("type", "text");
        newElement.setAttribute("value", text);
        parse(text, width, height, xpos, ypos);
    }

    //labels


    for(var i=0;i<jsonData.labels.length;i++)
    {   
        var element = jsonData.labels[i];
        text = element.text;
        width = element.width;
        height = element.height;
        xpos = element["x-pos"];
        ypos = element["y-pos"];
        
        newElement = document.createElement('span'); 
        parse(text, width, height, xpos, ypos);
    }

});

                  

function parse(t, w, h, x, y){
    var position = 'position:absolute;';
    var px = 'px;';
    var top = 'top:' + y + px;
    var left = 'left:' + x + px;
    var width = 'width:' + w + px;
    var height = 'height:' + h + px;
    var display = 'display:inline-block;';
   
    newElement.innerHTML = t;
    newElement.style.cssText = 
        position +
        top + 
        left +
        width + 
        height +
        position;
    
    document.getElementById('interface').appendChild(newElement);
}





