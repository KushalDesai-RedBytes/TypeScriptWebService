import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';

import { NetworkContext } from '../component/NetworkProvider';
import UserListScreen from './UserListScreen';

export class ExampleComponent extends React.PureComponent{
    static contextType = NetworkContext;



    render() {
        return (
            <SafeAreaView style={{flex: 1}}>
                <Text>You are now {this.context.isConnected ? 'online' : 'offline'}</Text>
                <UserListScreen />
            </SafeAreaView>
        );
    }
}