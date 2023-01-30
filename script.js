function generate(){
    var quotes = {
        "- Pierce Brown":'Man cannot be freed by the same injustice that enslaved it.',
        "-Madeline Miller":'Bury us, and mark our names above. Let us be free.',
        "-Nelson Mandela":'The greatest glory in living lies not in never falling, but in rising every time we fall',
        "-Walt Disney":'The way to get started is to quit talking and begin doing',
        "-Steve Jobs":'Your time is limited, so don`t waste it living someone else`s life. Don`t be trapped by dogma – which is living with the results of other people`s thinking.',
        "-Eleanor Roosevelt":'If life were predictable it would cease to be life, and be without flavor.',
        "-Oprah Winfrey":'If you look at what you have in life, you`ll always have more. If you look at what you don`t have in life, you`ll never have enough.',
        "-James Cameron":'If you set your goals ridiculously high and it`s a failure, you will fail above everyone else`s success.',
        "-John Lennon":'Life is what happens when you`re busy making other plans.',
    }

    var authors = Object.keys(quotes);
    var author = authors[Math.floor(Math.random() * authors.length)];
    var quote = quotes[author];

    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;
}