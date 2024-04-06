var booksList  = [
    {
        name:'Beauty and The Beast',
        author: 'Gabrielle-Suzanne de Villeneuve',
        publishers : 'Wonder House Books',
        Readingage :  '5 - 8 years',
        imageurl : 'https://images.moviesanywhere.com/ea0c3c3fd2cfb1311b8733b23f7735bc/602c5644-fff8-41be-b90e-1a435d96ca2a.jpg'
    },
    {
        name:'Sleeping Beauty',
        author: 'Wonder House Books',
        publishers : 'Wonder House Books',
        Readingage :  'Baby - 2 years',
        imageurl: 'https://m.media-amazon.com/images/I/81O45TJMQLL._AC_UF1000,1000_QL80_.jpg'
    },
    {
        name:'Hansel and Gretel',
        author: 'Sawan',
        publishers : 'Manoj Publications',
        Readingage :  'Baby - 2 years',
        imageurl:'https://m.media-amazon.com/images/I/81if2y8X2bL._AC_UF1000,1000_QL80_.jpg'
    },
    {
        name:'The Emperors New Clothes',
        author: 'Hans Christian Andersen',
        publishers : 'C.A. Reitzel',
        Readingage :  '5 - 8 years',
        imageurl: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1437982092l/176774.jpg'
    },
    {
        name:'Pinocchio',
        author: 'Carlo Collodi',
        publishers : 'ASCII Media Works',
        Readingage :  '4 - 7 years',
        imageurl:'https://cdn.shopify.com/s/files/1/0051/8845/2401/products/DisneyClassics-Pinocchio-Rounded.png?v=1635136971'
    },
    {
        name:'The Princess and the Frog',
        author: 'Thea Feldman',
        publishers : 'Disney Press',
        Readingage :  '3 - 5 years',
        imageurl:'https://lumiere-a.akamaihd.net/v1/images/p_theprincessandthefrog_20499_1c5f55a1.jpeg'
    },
    {
        name:'Snow White and the Seven Dwarfs',
        author: 'Jacob and Wilhelm Grimm',
        publishers : 'Golden/Disney',
        Readingage :  '3 - 7 years',
        imageurl: 'https://imperialtheatre.com/wp-content/uploads/2019/02/Snow_White_and_the_Seven_Dwarfs_poster.jpg'
    },
    {
        name:'Rapunzel',
        author: 'Wilhelm Grimm, Jacob Grimm',
        publishers : 'Dutton Press',
        Readingage :  'Baby - 6 years',
        imageurl:'https://m.media-amazon.com/images/I/81NK4w4QTDL._AC_UF1000,1000_QL80_.jpg'
    },
    {
        name:'The Adventures of Captain UnderPants',
        author: 'Dav Pilkey',
        publishers : 'Scholastic INC;',
        Readingage :  '7 - 10 years',
        imageurl: 'https://m.media-amazon.com/images/I/71sy8CMF+cL._AC_UF1000,1000_QL80_.jpg'
    },
    {
        name:'Harry Potter',
        author: 'J.K Rawling',
        publishers : 'Pottermore Publishing',
        Readingage :  '9 - 12 years',
        imageurl : 'https://m.media-amazon.com/images/I/81Vuk+qsXRL._AC_UF1000,1000_QL80_.jpg'
    },
    {
        name:'BedTime Stories',
        author: 'Uncle Amon',
        publishers : 'Hey Sup Bye Publishing',
        Readingage :  '3 - 6 years',
        imageurl : 'https://rukminim2.flixcart.com/image/850/1000/kpu3frk0/book/n/f/j/365-bedtime-stories-original-imag3z4nybfpfjpz.jpeg?q=90&crop=false'
    },
    {
        name:'Grandmas Bag of Stories',
        author: 'Sudha Murthy',
        publishers : 'Penguin Books Limited',
        Readingage :  '6-12 years',
        imageurl: 'https://www.bookganga.com/eBooks/Content/images/books/427502ae356a4401ad24a0a06f81dddc.jpg'
    },
    {
        name:'Panchatantra Stories',
        author: 'Maple Press',
        publishers : 'Maple Press',
        Readingage :  '3-7 years',
        imageurl : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgG_2caElQJzezE5eUASZ_AzRIIUX99WzFHA&usqp=CAU'
    },
    {
        name:'Akbar and Birbal stories',
        author: 'Monisha Mukundan',
        publishers : 'Young Learner Publications',
        Readingage :  '8 - 12 years',
        imageurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBI0fYoNXVl5qKWWGC5iF0aS2H0sCUMRtmYg&usqp=CAU'
    },
    {
        name:'Vikram and Beetal Stories',
        author: 'Somdev Bhatt',
        publishers : 'Maple Press',
        Readingage :  '7- 8 years',
        imageurl: 'https://rukminim2.flixcart.com/image/850/1000/kgpg5u80/book/8/0/4/121-vikram-betal-stories-original-imafwwfycduzfuwq.jpeg?q=90&crop=false'
    },
    {
        name:'Chandamama Stories',
        author: 'Dasari Subrahmanyam',
        publishers : 'JP Publication',
        Readingage :  '3 - 6 years',
        imageurl: 'https://ia903407.us.archive.org/BookReader/BookReaderImages.php?zip=/28/items/Chandamama-English-1955-8/Chandamama-English-1955-8_jp2.zip&file=Chandamama-English-1955-8_jp2/Chandamama-English-1955-8_0000.jp2&id=Chandamama-English-1955-8&scale=1&rotate=0'
    },
    {
        name:'Tenali Raman Stories',
        author: 'C. L. L. Jayaprada',
        publishers : 'Childrens Book Trust',
        Readingage :  '6 - 13 years',
        imageurl: 'https://www.maplepress.co.in/cdn/shop/files/tenalienglish_700x700.jpg?v=1698406985'
    },
    {
        name:'The Ant and the GrassHopper',
        author: 'Aesop',
        publishers : 'Miles Kelly Publishing',
        Readingage :  '6 - 8 years',
        imageurl: 'https://cdn.kobo.com/book-images/ed1cf7a9-662d-4580-bd8f-9be332b762fa/1200/1200/False/the-ant-and-the-grasshopper-8.jpg'
    },
    {
        name:'Gullivar and Liliputs',
        author: 'Jonathan Swift',
        publishers : 'RHUS',
        Readingage :  '8 - 10 years',
        imageurl: 'https://bookstation.in/cdn/shop/products/2760_front.jpg?v=1674981143&width=1024'
    },
    {
        name:'The Fox and Grapes',
        author: 'Aesop',
        publishers : 'Om Books International',
        Readingage :  '6 - 10 years',
        imageurl: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/1a6b1425608867.56348031e9b6f.jpeg'
    },
    {
        name:'The Hare and Tortoise',
        author: 'Aesop',
        publishers : 'Pegasus Books',
        Readingage :  '6 - 10 years',
        imageurl: 'https://m.media-amazon.com/images/I/816OivS2YpL._AC_UF1000,1000_QL80_.jpg'
    }
]