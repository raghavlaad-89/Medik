const allBlogData = [
    {
        id:"1",
        cover_img: require('../../utils/blogPage/blog1.jpg'),
        blogName: "Hand Sanitizer",
        date: "May 16, 2020",
        numberOfComments: "0",
        shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt nunc lorem, nec faucibus mi facilisis eget. Mauris laoreet, nisl id faucibus pellentesque, mi mi tempor enim, sit amet interdum felis nibh...",
        category: ["Precaution", "Safety"]
    },
    {
        id:"2",
        cover_img: require('../../utils/blogPage/blog2.jpg'),
        blogName: "Hand Sanitizer",
        date: "May 16, 2020",
        numberOfComments: "0",
        shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt nunc lorem, nec faucibus mi facilisis eget. Mauris laoreet, nisl id faucibus pellentesque, mi mi tempor enim, sit amet interdum felis nibh...",
        category: ["Precaution", "Saftey"]
    },
    {
        id:"3",
        cover_img: require('../../utils/blogPage/blog3-1.jpg'),
        blogName: "Hand Sanitizer",
        date: "May 16, 2020",
        numberOfComments: "0",
        shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt nunc lorem, nec faucibus mi facilisis eget. Mauris laoreet, nisl id faucibus pellentesque, mi mi tempor enim, sit amet interdum felis nibh...",
        category: ["Precaution", "Saftey"]
    },
    {
        id:"4",
        cover_img: require('../../utils/blogPage/blog4.jpg'),
        blogName: "Hand Sanitizer",
        date: "May 16, 2020",
        numberOfComments: "0",
        shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt nunc lorem, nec faucibus mi facilisis eget. Mauris laoreet, nisl id faucibus pellentesque, mi mi tempor enim, sit amet interdum felis nibh...",
        category: ["Precaution", "Saftey"]
    },
    {
        id:"5",
        cover_img: require('../../utils/blogPage/blog5-1.jpg'),
        blogName: "Hand Sanitizer",
        date: "May 16, 2020",
        numberOfComments: "0",
        shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt nunc lorem, nec faucibus mi facilisis eget. Mauris laoreet, nisl id faucibus pellentesque, mi mi tempor enim, sit amet interdum felis nibh...",
        category: ["Precaution", "Saftey"]
    },
    {
        id:"6",
        cover_img: require('../../utils/blogPage/blog6.jpg'),
        blogName: "Hand Sanitizer",
        date: "May 16, 2020",
        numberOfComments: "0",
        shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt nunc lorem, nec faucibus mi facilisis eget. Mauris laoreet, nisl id faucibus pellentesque, mi mi tempor enim, sit amet interdum felis nibh...",
        category: ["Precaution", "Saftey"]
    },
    {
        id:"7",
        cover_img: require('../../utils/blogPage/blog2.jpg'),
        blogName: "Hand Sanitizer",
        date: "May 16, 2020",
        numberOfComments: "0",
        shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt nunc lorem, nec faucibus mi facilisis eget. Mauris laoreet, nisl id faucibus pellentesque, mi mi tempor enim, sit amet interdum felis nibh...",
        category: ["Precaution", "Saftey"]
    },
    {
        id:"8",
        cover_img: require('../../utils/blogPage/blog2.jpg'),
        blogName: "Hand Sanitizer",
        date: "May 16, 2020",
        numberOfComments: "0",
        shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt nunc lorem, nec faucibus mi facilisis eget. Mauris laoreet, nisl id faucibus pellentesque, mi mi tempor enim, sit amet interdum felis nibh...",
        category: ["Precaution", "Saftey"]
    },
    {
        id:"9",
        cover_img: require('../../utils/blogPage/blog2.jpg'),
        blogName: "Hand Sanitizer",
        date: "May 16, 2020",
        numberOfComments: "0",
        shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt nunc lorem, nec faucibus mi facilisis eget. Mauris laoreet, nisl id faucibus pellentesque, mi mi tempor enim, sit amet interdum felis nibh...",
        category: ["Precaution", "Saftey"]
    },
    {
        id:"10",
        cover_img: require('../../utils/blogPage/blog2.jpg'),
        blogName: "Hand Sanitizer",
        date: "May 16, 2020",
        numberOfComments: "0",
        shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt nunc lorem, nec faucibus mi facilisis eget. Mauris laoreet, nisl id faucibus pellentesque, mi mi tempor enim, sit amet interdum felis nibh...",
        category: ["Precaution", "Saftey"]
    },
    {
        id:"11",
        cover_img: require('../../utils/blogPage/blog2.jpg'),
        blogName: "Hand Sanitizer",
        date: "May 16, 2020",
        numberOfComments: "0",
        shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt nunc lorem, nec faucibus mi facilisis eget. Mauris laoreet, nisl id faucibus pellentesque, mi mi tempor enim, sit amet interdum felis nibh...",
        category: ["Precaution", "Saftey"]
    },
    {
        id:"12",
        cover_img: require('../../utils/blogPage/blog2.jpg'),
        blogName: "Hand Sanitizer",
        date: "May 16, 2020",
        numberOfComments: "0",
        shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt nunc lorem, nec faucibus mi facilisis eget. Mauris laoreet, nisl id faucibus pellentesque, mi mi tempor enim, sit amet interdum felis nibh...",
        category: ["Precaution", "Saftey"]
    },
    {
        id:"13",
        cover_img: require('../../utils/blogPage/blog2.jpg'),
        blogName: "Hand Sanitizer",
        date: "May 16, 2020",
        numberOfComments: "0",
        shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt nunc lorem, nec faucibus mi facilisis eget. Mauris laoreet, nisl id faucibus pellentesque, mi mi tempor enim, sit amet interdum felis nibh...",
        category: ["Precaution", "Saftey"]
    },
    {
        id:"14",
        cover_img: require('../../utils/blogPage/blog2.jpg'),
        blogName: "Hand Sanitizer",
        date: "May 16, 2020",
        numberOfComments: "0",
        shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt nunc lorem, nec faucibus mi facilisis eget. Mauris laoreet, nisl id faucibus pellentesque, mi mi tempor enim, sit amet interdum felis nibh...",
        category: ["Precaution", "Saftey"]
    },
    {
        id:"15",
        cover_img: require('../../utils/blogPage/blog2.jpg'),
        blogName: "Hand Sanitizer",
        date: "May 16, 2020",
        numberOfComments: "0",
        shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt nunc lorem, nec faucibus mi facilisis eget. Mauris laoreet, nisl id faucibus pellentesque, mi mi tempor enim, sit amet interdum felis nibh...",
        category: ["Precaution", "Saftey"]
    },
    {
        id:"16",
        cover_img: require('../../utils/blogPage/blog2.jpg'),
        blogName: "Hand Sanitizer",
        date: "May 16, 2020",
        numberOfComments: "0",
        shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt nunc lorem, nec faucibus mi facilisis eget. Mauris laoreet, nisl id faucibus pellentesque, mi mi tempor enim, sit amet interdum felis nibh...",
        category: ["Precaution", "Saftey"]
    },
    {
        id:"17",
        cover_img: require('../../utils/blogPage/blog2.jpg'),
        blogName: "Hand Sanitizer",
        date: "May 16, 2020",
        numberOfComments: "0",
        shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt nunc lorem, nec faucibus mi facilisis eget. Mauris laoreet, nisl id faucibus pellentesque, mi mi tempor enim, sit amet interdum felis nibh...",
        category: ["Precaution", "Saftey"]
    },
    {
        id:"18",
        cover_img: require('../../utils/blogPage/blog2.jpg'),
        blogName: "Hand Sanitizer",
        date: "May 16, 2020",
        numberOfComments: "0",
        shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt nunc lorem, nec faucibus mi facilisis eget. Mauris laoreet, nisl id faucibus pellentesque, mi mi tempor enim, sit amet interdum felis nibh...",
        category: ["Precaution", "Saftey"]
    },
    {
        id:"19",
        cover_img: require('../../utils/blogPage/blog2.jpg'),
        blogName: "Hand Sanitizer",
        date: "May 16, 2020",
        numberOfComments: "0",
        shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt nunc lorem, nec faucibus mi facilisis eget. Mauris laoreet, nisl id faucibus pellentesque, mi mi tempor enim, sit amet interdum felis nibh...",
        category: ["Precaution", "Saftey"]
    },
    
]

export default allBlogData;