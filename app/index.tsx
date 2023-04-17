import { useState } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { MilitaryUnit } from '../utils/military-unit'
import { Militia } from '../utils/militia'
import { Necromancer } from '../utils/necromancer'
import { Orc } from '../utils/orc'

const min = (arr: MilitaryUnit[]) => {
  if (arr.length === 0) return 0

  return arr.reduce(
    (minValue, current) =>
      current.speed < minValue ? current.speed : minValue,
    arr[0].speed
  )
}

const vocab = {
  necro: 'Некроманти',
  militia: 'Ополчення у легкій броні',
  orc: 'Окри'
}

export default function Page() {
  const [army, setArmy] = useState<MilitaryUnit[]>([])
  const [details, setDetails] = useState({
    necro: 0,
    militia: 0,
    orc: 0
  })

  return (
    <View style={styles.main}>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Модульна контрольна робота</Text>
        <Text style={styles.subHeading}>Міїн Олексій</Text>
        <Text style={styles.taskText}>
          Середньовічний король вирішив оголосити війну сусідній державі для
          чого необхідно сформувати своє військо та розрахувати вартість його
          утримання та швидкість пересування. Після обліку наявних військових
          одиниць виявилось, що у військо можна записати некромантів у легкій
          броні (вартість утримання 5 золотих на добу + одне мертве тіло(можна і
          живе, але тоді необхідно врахувати додаткові витрати, а саме зарплатню
          кату 1 золотий) швидкість 15 км/ч), ополчення у легкій броні(вартість
          утримання 0, швидкість 5 км/ч можна передавати в якості тіл
          некромантам і корму варгів) і орки (вартість утримання 3 золотих +
          корм для варгів, які полюбляють людське м‘ясо, швидкість 13 км/ч).
          Необхідно сформувати військо з як мінімум 3 родів військ і розрахувати
          вартість утримання та швидкість. Результати такого планування
          необхідно виводити на екран.
        </Text>
        <Text style={styles.taskText}>
          Будео вважати, що ціна мертвого тіла 3 золотих, а ціна м'яса для для
          варгів 6 золотих
        </Text>
      </View>
      <View style={styles.addButtonContainer}>
        <Button
          title="Додати некромантів"
          onPress={() => {
            setArmy(prev => [...prev, new Necromancer(5, 15, 3)])
            setDetails(prev => ({ ...prev, necro: prev.necro + 1 }))
          }}
        />
        <Button
          title="Додати ополчення у легкій броні"
          onPress={() => {
            setArmy(prev => [...prev, new Militia(0, 5)])
            setDetails(prev => ({ ...prev, militia: prev.militia + 1 }))
          }}
        />
        <Button
          title="Додати орків"
          onPress={() => {
            setArmy(prev => [...prev, new Orc(3, 13, 6)])
            setDetails(prev => ({ ...prev, orc: prev.orc + 1 }))
          }}
        />
      </View>
      <View style={styles.resultsContainer}>
        <Text style={styles.detailsText}>Результати</Text>
        <Text style={styles.baseText}>
          Загальна вартсіть:{' '}
          {army.reduce((acc, unit) => acc + unit.calculateCost(), 0)} золотих
        </Text>
        <Text style={styles.baseText}>Швидкітсь: {min(army)} км/год</Text>
        <View style={styles.detailsConatiner}>
          <Text style={styles.detailsText}>Деталі</Text>
          {Object.entries(details).map(([unit, total]) => (
            <View key={unit}>
              <Text style={styles.baseText}>
                {vocab[unit]}: {total} во*
              </Text>
            </View>
          ))}
        </View>
        <View style={styles.ps}>
          <Text>*вo - військо</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    maxWidth: 768,
    marginHorizontal: 'auto'
  },
  headingContainer: {
    marginVertical: 24,
    textAlign: 'center'
  },
  heading: {
    fontSize: 24,
    fontWeight: '700'
  },
  subHeading: {
    fontSize: 18,
    fontWeight: '500'
  },
  addButtonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    gap: 12
  },
  resultsContainer: {
    marginTop: 16
  },
  detailsConatiner: {
    marginTop: 16
  },
  detailsText: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  baseText: {
    fontSize: 16
  },
  taskText: {
    textAlign: 'left',
    marginTop: 8,
    fontSize: 16
  },
  ps: {
    marginVertical: 10
  }
})
