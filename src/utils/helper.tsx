import NetInfo from '@react-native-community/netinfo';
import UserInfo from '../screens/UserListScreen'



export function isInternetAvailable(){

    let isConnected: boolean = false
  
    var handleConnectionChange = (isConnected: boolean) => {
        isConnected = isConnected
    }
  
    NetInfo.isConnected.addEventListener('connectionChange', handleConnectionChange);
  
    NetInfo.isConnected.fetch().done(
      (isConnected: boolean) => { isConnected = isConnected }
    );
  
    NetInfo.isConnected.removeEventListener('connectionChange', handleConnectionChange);
    return isConnected
  }

  export const callApi = (url : string) => {
      return new Promise((resolve, reject)=>{

        fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                console.log("responseData", responseJson)
                resolve(responseJson)
            })
            .catch(error => {
                console.log("Error: ", error);
                reject(error)
            })
      })
  }

  export async function getUsers<T>(url: string): Promise<T> {
    try {
          const response = await fetch(url);
          if (!response.ok) {
              throw new Error(response.statusText);
          }
          const data = await response.json();
          return data ;
      }
      catch (error) {
          throw error;
      }
  }