## :dart: Requirements achieved

- [x] Used Next.JS effectively with server-set pages, dynamic pages for each post and minimal use of client-side components
- [x] Display all posts with searchParams for sorting
- [x] Created SQL schema for posts and comments (with post_id as foreign key)7
- [x] Created a form which saves posts and form which saves comments.
- [x] Created a client-side delete button which invokes function from server-side
- [x] Allow users to comment on individual posts on a dynamic route
- [x] RevalidatePath and Redirect when saving a post or comment

## :dart: Stretch goals

- [x] Feature for editing a post - added extra route /id/edit and reused the **PostForm** component but fetch the row of data (params) and fill in with defaultValues
- [x] Used utilities to store db connection for reduced code
- [x] Used Clerk middleware to secure routes - function stored in utils for reduced code
- [x] Used currentUser from Clerk to automatically store the user's username as part of formData going to db
- [x] Used currentUser to conditionally show the edit button only for the user who created it
- [x] Similarly used currentUser to conditionally show the delete comment button
- [x] Custom colors and fonts in globals.css
- [x] Used module stylesheets to keep css orgnasised
- [x] Static and dynamic metadata and the beginnings of OG for social media. Added opengraph-image.png

## :dart: Goals not acheived yet

- [ ] Edit for comments, I could but I'm stopping here
- [ ] Better validation for image url, I know I can use Regexp to match with known image patterns

## With thanks to

- [Toasted bread slice cartoon sticker, brgfx](https://www.freepik.com/free-vector/toasted-bread-slice-cartoon-sticker_17620458.htm#from_element=cross_selling__vector)
- [Flat geometric shapes wallpaper, Freepik](https://www.freepik.com/free-vector/flat-geometric-shapes-wallpaper_6195933.htm#fromView=search&page=1&position=37&uuid=e815ffe9-8697-482b-9e50-4b49368c9e4d&query=icon+backgrounds)

Unsplash

- [Jason Leung]()
- [Nathan Dumlao](https://unsplash.com/photos/cooked-meat-with-green-vegetable-on-white-ceramic-plate-IjovY65WQiE)
- [Laura Mitulla](https://unsplash.com/photos/rocks-glass-beside-half-empty-bottle-on-white-surface-7Zlds3gm7NU)
- [SJ](https://unsplash.com/photos/a-glass-jar-filled-with-chocolate-covered-cookies-1O6m5CheBUY)
- [Dmitry Ganin](https://unsplash.com/photos/a-woman-lying-in-a-bed-Z56eN0CGtyk)
- Indebted to Greg Foot and the team at [Sliced Bread ](https://www.bbc.co.uk/sounds/series/p07012sf) for inspiration
