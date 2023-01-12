const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send('Hello there');
});

const courses = [
    {id: 1, name: 'Web Development'},
    {id: 2, name: 'IT'},
    {id: 3, name: 'Cybersecurity'},
];

app.get('/api/courses', (req, res) => {
    res.send(courses);
});
app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    console.log(course);
    if (!course) {
        res.status(404).send("The course with the given ID was not found");
        return
        // Return to stop the process before it can send an undefined course
    }
    res.send(course);
})
app.listen(3000, () => {
    console.log('Listening on port 3000 ...');
})