interface IDomElement {
  print();
}

class TextNode implements IDomElement {
    private text:string;
    constructor(text: string) {
      this.text = text;
    }
    print () {
      console.log(this.text);
    }
}

class DomElement implements IDomElement {
  elementName:string;
  textContent:string;
  elements:IDomElement[];

  constructor(elementName: string, textContent?: string) {
    this.elementName = elementName;
    this.elements = [];
    this.textContent = textContent;
  } 

  addElement (element:IDomElement) {
    this.elements.push(element)
  }

  print() {
    console.log("<" + this.elementName + ">");
    for (let element of this.elements) {
      element.print()
    } 
    console.log("</" + this.elementName + ">"); 
  }
  
}

let p1 = new DomElement("p");
let p2 = new DomElement("p");
let div = new DomElement("div");
let html = new DomElement("html");

p1.addElement(new TextNode("Hi, I am a TextNode being printed!"));
p2.addElement(new TextNode("TextNode == leaf"));

div.addElement(p1);
div.addElement(p2);
html.addElement(div);

html.print();
