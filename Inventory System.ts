// 12. Simple Task Tracker with Access Control
// Create a class Task with:
// · title: string
// · description: string
// · completed: boolean (default: false)
// · private property createdBy: string
// Use getters and setters:
// · Get createdBy only with a getter
// · Add method toggleStatus(): void to switch completed status
// · Add method getDetails(): string to return information about a task in the format "Task: <title> - <description> - <Completed | Pending>"
// Also create a static method createSampleTasks(): Task[] that returns an array with at least two example tasks.

class Task {
   public title: string;
   public description: string;
   public completed: boolean = false;
   private _createdBy: string;

   private static allTasks: Task[] = [];

   constructor(
      title: string,
      description: string,
      createdBy: string,
      completed: boolean = false
   ) {
      this.title = title;
      this.description = description;
      this.completed = completed;
      this._createdBy = createdBy;
   }

   get createdBy(): string {
      return this._createdBy;
   }

   static getAllTasks(): Task[] {
      return Task.allTasks;
   }

   static printAllTasks(): void {
      console.log('All tasks:');
      Task.allTasks.forEach((task) =>
         console.log(
            `Task: ${task.title} - ${task.description} - ${
               task.completed ? 'Completed' : 'Pending'
            }`
         )
      );
   }

   createSampleTasks(): void {
      Task.allTasks.push(this);
   }

   toggleStatus(): void {
      this.completed = !this.completed;
   }

   getDetails(): string {
      return `Task: ${this.title} - ${this.description} - ${
         this.completed ? 'Completed' : 'Pending'
      }`;
   }
}

const task1 = new Task('Complete homework', 'Finish math exercises', 'Charlie');
task1.toggleStatus();
console.log(task1.getDetails());
const task2 = new Task('Clean room', 'Clean the room', 'Mary');
console.log(task2.getDetails());

task1.createSampleTasks();
task2.createSampleTasks();

Task.printAllTasks();
