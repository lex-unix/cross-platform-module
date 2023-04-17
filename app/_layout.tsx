import { Drawer } from '../components/drawer'

export default function RootLayout() {
  return (
    <Drawer initialRouteName="lab-1">
      <Drawer.Screen
        name="index"
        options={{
          drawerLabel: 'Home',
          title: 'Home'
        }}
      />
    </Drawer>
  )
}
