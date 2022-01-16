import {v4 as uuidM} from "uuid"
// import createHttpError from 'http-errors';
import {Column,PrimaryColumn,BaseEntity,Entity} from 'typeorm';


// interface IBoard {
//   id?: string;
//   title: string;
//   columns: Array<{id:string;title:string;order:number}>;
// }

interface IColumn {
  id: string;
  title: string;
  order: number;
}

//  const boards: IBoard[]=[]

@Entity('board')
export class Board extends BaseEntity{


  constructor({
    id = uuidM(),
    title = 'REST',
    columns = [{id:'dasdasd',title: 'do smth', order: 12}]
  } = {}) {
    super()
    this.id = id;
    this.title = title;
    this.columns = columns;
  }

  @PrimaryColumn({
    type:"uuid"
  })
  id: string

  @Column({type: 'text'})
  title: string

  @Column({
    type: "jsonb",
    array:true,
    default:[],
    
  })
  columns: Array<IColumn>



  // /**
  //  * Returns board object
  //  * 
  //  * 
  //  * @returns board - object with fields `id`, `title`, `columns`
  //  */

  // toSaveBoard(){
  //   return {
  //     id: this.id,
  //     title: this.title,
  //     columns: this.parseColumns()
  //   }
  // }

  // /**
  //  * Returns new columns with id generated
  //  * 
  //  * @returns cols - parsed columns with the new field `id` using uuid
  //  */

  //  parseColumns(){
  //   const cols = this.columns.map((col:IColumn) => {
  //       const {title,order} = col;
  //       const column ={id: uuidM(),title,order}
  //       return column
  //   })
  //    return cols;
  // }

  // /**
  //  * Saves new board and returns it
  //  * 
  //  * @returns board - newly saved board object
  //  * @throws Error - Throws new Error if cannot access to database 
  //  */

  //  save(){
  //   if(!boards){
  //    return createHttpError(500,'Cannot access to database!')
  //   }
  //   boards.push(this.toSaveBoard())
  //   return boards[boards.length-1];
  // } 

  // /**
  //  * Updates the board and returns it
  //  * 
  //  * @param id - The `id` of the board
  //  * @param board - Body of the board `title`, `columns`
  //  * @returns board - Just updated board
  //  * @throws Error - Throws new Error if there is no board with that `id` or cannot access to database
  //  */

  // static update(id: string,board: IBoard){
  //   const boardsDB = boards || undefined
  //   if(!boardsDB){
  //     throw new createHttpError.InternalServerError('Cannot access to database!')
  //   }
  //   const index = boards.findIndex( c=> c.id === id)
  //   if(index === -1){
  //    throw new createHttpError.NotFound(`Board with id ${id} doesn't exist!`)
  //   }
  //   const newBoard: IBoard = {id:'',title:'',columns:[{id:'',title:'',order:0}]}
  //   newBoard.id =  id;
  //   newBoard.title = board.title;
  //   newBoard.columns = board.columns.map((col:IColumn)=> ({id:col.id,title:col.title,order:col.order}));

  //   boards[index] = newBoard;
  //   return boards[index];
  // }
 

  // /**
  //  * Returns all boards in the database
  //  * 
  //  * @returns boards - All the boards in database
  //  */

  // static getAll(): IBoard[]{
  //   return boards
  // }

  // /**
  //  * Returns the board with same id
  //  * 
  //  * @param id - The `id` of the board
  //  * @returns The board with the same `id`
  //  * @throws Throws new Error if there is no board with such id
  //  */

  // static getById(id:  string):IBoard{
  //   const boardsDB = boards
  //   const board = boardsDB.find((c:IBoard) => c.id === id)
  //   if(!board){
  //     throw new createHttpError.NotFound(`There is no board with such id = ${id}`)
  //   }
  //   else{
  //     return board;
  //   }
  // }

  // /**
  //  * Removes the board from database
  //  * 
  //  * @param id - The `id` of the board
  //  * @throws Throws new Error if there is no board with such id
  //  */

  // static remove(id: string): void{
  //   const index = boards.findIndex( (c: IBoard) => c.id === id)
  //   if(index === -1){
  //     throw new createHttpError.NotFound(`Board with id ${id} doesn't exist!`)
  //   }
  //   else{
  //       boards.splice(index,1)
  //   }

  // }

  
}

export default Board;
