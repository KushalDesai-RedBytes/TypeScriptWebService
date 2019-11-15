import React from 'react';
import { View, Text, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';

import { NetworkContext } from '../component/NetworkProvider';
import { getUsers, callApi } from '../utils/helper';


interface Prop{

}

interface State{
    userlist: UserInfo[]
}

interface ResponseModel {
    page: number,
    per_page: number,
    total: number,
    total_pages: number,
    data: UserInfo[]
}

export interface UserInfo{
    id: number,
    email: string,
    name: string,
    website: string
}

export default class UserListScreen extends React.Component<Prop,State>{
    static contextType = NetworkContext;

    constructor(props: Prop) {
        super(props);
        this.state = {
            userlist: [],
        }
    }
    renderItemRow = ({item, index}) => {
        return (
            <View>
                <Text>{item.name} {item.email}</Text>
            </View>
        );
    }

    componentDidMount(){
        
    }

    getUsers(){
        if (this.context.isConnected) {
            this.callUserApi();
        } else {

        }
    }

    callUserApi(){
        // callApi('https://jsonplaceholder.typicode.com/users/')
        //     .then((responseJson) => {
        //         this.setState({
        //             userlist: responseJson,
        //         })
        //     })
        //     .catch(error=>{
        //         console.log(error)
        //     })

            getUsers<UserInfo[]>('https://jsonplaceholder.typicode.com/users/')
            .then((responseJson) => {
                this.setState({
                    userlist: responseJson
                })
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <TouchableOpacity onPress={()=>this.getUsers()}><Text>Get Users</Text></TouchableOpacity>
                <FlatList 
                    data = {this.state.userlist}
                    extraData = {this.state}
                    keyExtractor = {(item, index) => index.toString()}
                    renderItem = {this.renderItemRow.bind(this)}/>
            </View>
        );
    }
}