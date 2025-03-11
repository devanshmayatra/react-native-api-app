import { User } from "../types/user";

export async function getData (){
  let count = 0;
  const url = "https://random-data-api.com/api/users/random_user?size=80"
  const response = await fetch(url)
  count++;
  const data : User[] = await response.json()
  console.log(`Data Fetched ${count}`)
  return data;
} 