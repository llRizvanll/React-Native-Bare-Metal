import React, { Component } from 'react';
import { View,StyleSheet } from 'react-native';
import { Drawer, DrawerItem, DrawerHeader, DrawerSection, Appbar, Heading, BodyText } from 'material-bread';

export class DrawerPage extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        isOpen: false
      }
    }
    render() {

      const DrawerContent = () => {
        return (
          <View>
            <DrawerHeader title={'Jon Snow'} subtitle={'Knows nothing'} />
            <DrawerSection bottomDivider>
              <DrawerItem text={'Inbox'} icon={'mail'} active />
              <DrawerItem text={'Outbox'} icon={'send'} />
              <DrawerItem text={'Favorites'} icon={'favorite'} />
            </DrawerSection>
          </View>
        );
      };
      
      const PageContent = () => {
        return (
          <View style={styles.body}>
            <Heading type={4} style={{ marginBottom: 20 }}>
              This is a page
            </Heading>
            <BodyText text={'Click the menu button to open the drawer'} />
            <BodyText text={'Click outside the drawer to close it'} />
          </View>
        );
      };
      
      const AppbarContent = () => {
        return (
          <Appbar
            barType={'normal'}
            title={'Page Title'}
            navigation={'menu'}
            onNavigation={() => this.setState({ isOpen: !this.state.isOpen })}
            actionItems={[{ name: 'search' }, { name: 'more-vert' }]}
          />
        );
      };
      
      return (
        <View style={styles.container}>
            <Drawer
                open={this.state.isOpen}
                // pageHeight={'100%'}
                scrimStyles={{position: 'absolute'}}
                drawerContent={<DrawerContent />}
                onClose={() => this.setState({ isOpen: false })}
                appbar={<AppbarContent  />}
            >
                <PageContent />
            </Drawer>
        </View>
      );
    }
  }
  const styles = StyleSheet.create({
    body: {
      backgroundColor: '#eee',
    },
    container: {
      },
      body: {
        backgroundColor: '#eee',
        height: '100%',
        width: '100%', 
        flex: 1,
        paddingTop: 20, 
        alignItems: 'center', 
      },
  });