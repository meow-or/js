
function Blog(props) {

  const sidebar = (
    <ul>
      {props.posts.map(post => 
        <li key={post.id}>
          {post.title}
        </li>
      )}
    </ul>
  );

  const content = props.posts.map(post =>
    <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
    </div>
  );

  return (
    <div>
      {sidebar}
      <hr/>
      {content}
    </div>
  );
}

const posts = [
  {id: 1, title: 'Привет, мир', content: 'Добро пожаловать в изучение React!'},
  {id: 2, title: 'Установка', content: 'Вы можете установить React из npm.'}
];

ReactDOM.render(
  <Blog posts={posts}/>,
  document.querySelector('#root')
);