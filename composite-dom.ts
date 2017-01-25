//Lab #4
interface IDomElement {
  print();
}

class DOM implements IDomElement{
  private grouping:IDomElement[] = [];
  text:string;

 constructor(private tags:string, text?:string) {
    this.text = text;
    this.grouping = [];
  }

 add(object:IDomElement) {
    this.grouping.push(object);
  }

 print() {
    console.log("<" + this.tags + ">");
    if (this.text) {
      console.log(this.text);
    }

    for (let object of this.grouping) {
      object.print();
    }
    console.log("</" + this.tags + ">");
  }
}

class MyText implements IDomElement{
  constructor(private text:string) { }

 print() {
    console.log(this.text);
  }
}
let div = new DOM("div");
let html = new DOM("html");
let paragraph = new DOM("p");
let paragraph2 = new DOM("p");

div.add(paragraph);
div.add(paragraph2);

paragraph.add(new MyText("Hi, I am a TextNode being printed!")); // TextNode
paragraph2.add(new MyText("TextNode == leaf")); // TextNode

html.add(div);
html.print();