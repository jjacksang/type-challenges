
interface Todo1 {
  title: string
  description: string
  completed: boolean
  meta: {
    author: string
  }
}


interface Todo {
  title: string;
  description: string;

}

const todo: MyReadonly<Todo> = {
  title: "Hey",
  description: "foobar"
}

todo.title = "Hello"
todo.description = "barFoo";
