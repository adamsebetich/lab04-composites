var DOM = (function () {
    function DOM(tags, text) {
        this.tags = tags;
        this.grouping = [];
        this.text = text;
        this.grouping = [];
    }
    DOM.prototype.add = function (object) {
        this.grouping.push(object);
    };
    DOM.prototype.print = function () {
        console.log("<" + this.tags + ">");
        if (this.text) {
            console.log(this.text);
        }
        for (var _i = 0, _a = this.grouping; _i < _a.length; _i++) {
            var object = _a[_i];
            object.print();
        }
        console.log("</" + this.tags + ">");
    };
    return DOM;
}());
var MyText = (function () {
    function MyText(text) {
        this.text = text;
    }
    MyText.prototype.print = function () {
        console.log(this.text);
    };
    return MyText;
}());
var div = new DOM("div");
var html = new DOM("html");
var paragraph = new DOM("p");
var paragraph2 = new DOM("p");
div.add(paragraph);
div.add(paragraph2);
paragraph.add(new MyText("Hi, I am a TextNode being printed!")); // TextNode
paragraph2.add(new MyText("TextNode == leaf")); // TextNode
html.add(div);
html.print();
