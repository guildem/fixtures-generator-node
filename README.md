# fixtures-generator-node

Generates random fixtures easily.

Examples :

```js
const r = require('fixtures-generator-node')

const users = r.utils.array(25, i => ({
  id: r.mem.keep(i+1, 'userId'),
  email: r.profile.email(),
  password: 'user'+(i+1),
  avatar: r.images.avatarUrl(),
  biography: r.lorem.words(),
  createdAt: r.dates.timestamp(),
  updatedAt: r.dates.after(),
}))

const posts = r.utils.array(r.numbers.int({min:15,max:30}), i => ({
  id: i+1,
  userId: r.mem.one('userId'),
  title: r.lorem.words(),
  content: r.lorem.paragraphs({min:5,max:12,nl:'<br>'}),
  published: r.numbers.bool(0.75),
  createdAt: r.dates.timestamp(),
  updatedAt: r.dates.after(),
}))
```
