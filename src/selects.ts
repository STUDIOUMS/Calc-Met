import { SelectItemType } from "./types"

// lengthSizeSelect
export const lengthSizeSelect: SelectItemType[] = [
  { value: 'мм.', label: 'мм.' },
  { value: 'см.', label: 'см.' },
  { value: 'м.', label: 'м.' }
]

// weightSizeSelect
export const weightSizeSelect: SelectItemType[] = [
  { value: 'кг.', label: 'кг.' },
  { value: 'тн.', label: 'тн.' },
]

// currencySelect
export const currencySelect: SelectItemType[] = [
  { value: 'руб', label: 'руб' },
  { value: 'USD', label: 'USD' },
  { value: 'EUR', label: 'EUR' },
]

// selectShapes
export const selectShapes: SelectItemType[] = [
  { value: 'pipe-square', label: 'Труба профильная' },
  { value: 'sheet', label: 'Лист' },
  { value: 'pipe', label: 'Труба' },
  { value: 'circle', label: 'Круг' },
  { value: 'corner', label: 'Уголок' },
  { value: 'square', label: 'Квадрат' },
  { value: 'shwell', label: 'Швеллер' },
  { value: 'ribbon', label: 'Полоса' },
  { value: 'rail', label: 'Балка' },
  { value: 'corner6', label: 'Шестигранник' },
]

// selectList
export const selectList: SelectItemType[] = [
  {
    value: '1',
    label: 'Сталь',
    list: [
      { value: '1', dataValue: '7850', label: 'Марка' },
      { value: '2', dataValue: '7850', label: 'Ст3сп' },
      { value: '3', dataValue: '7800', label: 'Ст3пс' },
      { value: '4', dataValue: '7850', label: 'Ст1' },
      { value: '5', dataValue: '7800', label: 'Ст3кп' },
      { value: '6', dataValue: '7760', label: '08Х17Т' },
      { value: '7', dataValue: '7760', label: '08Х13' },
      { value: '8', dataValue: '7850', label: '08Х18Н10' },
      { value: '9', dataValue: '7900', label: '08Х18Н10Т' },
      { value: '10', dataValue: '7850', label: '09Г2С' },
      { value: '11', dataValue: '7850', label: '10' },
      { value: '12', dataValue: '7900', label: '10X17H13М2T' },
      { value: '13', dataValue: '7900', label: '10X17H13М3T' },
      { value: '14', dataValue: '7850', label: '10ХСНД' },
      { value: '15', dataValue: '7820', label: '110Г13Л' },
      { value: '16', dataValue: '7720', label: '12Х13' },
      { value: '17', dataValue: '7900', label: '12Х18Н10Т' },
      { value: '18', dataValue: '7800', label: '12Х1МФ' },
      { value: '19', dataValue: '7750', label: '14Х17Н2' },
      { value: '20', dataValue: '7700', label: '15Х25Т' },
      { value: '21', dataValue: '7750', label: '15Х5М' },
      { value: '22', dataValue: '7850', label: '15ХСНД' },
      { value: '23', dataValue: '7850', label: '20' },
      { value: '24', dataValue: '7850', label: '20Л' },
      { value: '25', dataValue: '7670', label: '20Х13' },
      { value: '26', dataValue: '7900', label: '20Х23Н18' },
      { value: '27', dataValue: '7820', label: '30Х' },
      { value: '28', dataValue: '7670', label: '30Х13' },
      { value: '29', dataValue: '7850', label: '38ХН3МА' },
      { value: '30', dataValue: '7820', label: '40Х' },
      { value: '31', dataValue: '7650', label: '40Х13' },
      { value: '32', dataValue: '7820', label: '45' },
      { value: '33', dataValue: '7800', label: '5ХНМ' },
      { value: '34', dataValue: '7810', label: '60Г' },
      { value: '35', dataValue: '7680', label: '60С2А' },
      { value: '36', dataValue: '7810', label: '65' },
      { value: '37', dataValue: '7850', label: '65Г' },
      { value: '38', dataValue: '7810', label: '70' },
      { value: '39', dataValue: '7750', label: '95Х18' },
      { value: '40', dataValue: '7850', label: 'AISI 304' },
      { value: '41', dataValue: '7850', label: 'AISI 304L' },
      { value: '42', dataValue: '8000', label: 'AISI 316L' },
      { value: '43', dataValue: '7950', label: 'AISI 316Ti' },
      { value: '44', dataValue: '7900', label: 'AISI 321' },
      { value: '45', dataValue: '7760', label: 'AISI 409' },
      { value: '46', dataValue: '7720', label: 'AISI 410' },
      { value: '47', dataValue: '7650', label: 'AISI 420' },
      { value: '48', dataValue: '7670', label: 'AISI 420S' },
      { value: '49', dataValue: '7720', label: 'AISI 430' },
      { value: '50', dataValue: '7700', label: 'AISI 439' },
      { value: '51', dataValue: '7960', label: 'AISI 904L' },
      { value: '52', dataValue: '8300', label: 'Р6М5' },
      { value: '53', dataValue: '7810', label: 'У10' },
      { value: '54', dataValue: '7810', label: 'У10А' },
      { value: '55', dataValue: '7810', label: 'У12А' },
      { value: '56', dataValue: '7830', label: 'У7' },
      { value: '57', dataValue: '7839', label: 'У8' },
      { value: '58', dataValue: '7830', label: 'У8А' },
      { value: '59', dataValue: '8500', label: 'Х15Н60' },
      { value: '60', dataValue: '8400', label: 'Х20Н80' },
      { value: '61', dataValue: '7210', label: 'Х23Ю5Т' },
      { value: '62', dataValue: '7810', label: 'ШХ15' },
      { value: '63', dataValue: '7850', label: 'ШХ4' }
    ]
  },
  {
    value: '3',
    label: 'Чугун',
    list: [
      { value: '1', dataValue: '7500', label: 'Марка' },
      { value: '2', dataValue: '6800', label: 'СЧ10' },
      { value: '3', dataValue: '7000', label: 'СЧ15' },
      { value: '4', dataValue: '7100', label: 'СЧ20' },
      { value: '5', dataValue: '7200', label: 'СЧ25' },
      { value: '6', dataValue: '7400', label: 'СЧ35' }
    ]
  },
  {
    value: '4',
    label: 'Алюминий',
    list: [
      { value: '1', dataValue: '2690', label: 'Марка' },
      { value: '2', dataValue: '2470', label: '1420' },
      { value: '3', dataValue: '2710', label: 'А5' },
      { value: '4', dataValue: '2700', label: 'А85' },
      { value: '5', dataValue: '2710', label: 'А95' },
      { value: '6', dataValue: '2710', label: 'А97' },
      { value: '7', dataValue: '2700', label: 'А99' },
      { value: '8', dataValue: '2710', label: 'А999' },
      { value: '9', dataValue: '2700', label: 'АВ' },
      { value: '10', dataValue: '2710', label: 'АД' },
      { value: '11', dataValue: '2710', label: 'АД0' },
      { value: '12', dataValue: '2710', label: 'АД1' },
      { value: '13', dataValue: '2710', label: 'АД31' },
      { value: '14', dataValue: '2710', label: 'АД33' },
      { value: '15', dataValue: '2770', label: 'АК4' },
      { value: '16', dataValue: '2800', label: 'АК4-1' },
      { value: '17', dataValue: '2850', label: 'АК5М7' },
      { value: '18', dataValue: '2750', label: 'АК6' },
      { value: '19', dataValue: '2800', label: 'АК8' },
      { value: '20', dataValue: '2750', label: 'АЛ1' },
      { value: '21', dataValue: '2780', label: 'АЛ19' },
      { value: '22', dataValue: '2650', label: 'АЛ2' },
      { value: '23', dataValue: '2700', label: 'АЛ3' },
      { value: '24', dataValue: '2650', label: 'АЛ32' },
      { value: '25', dataValue: '2650', label: 'АЛ4' },
      { value: '26', dataValue: '2680', label: 'АЛ5' },
      { value: '27', dataValue: '2800', label: 'АЛ7' },
      { value: '28', dataValue: '2550', label: 'АЛ8' },
      { value: '29', dataValue: '2660', label: 'АЛ9' },
      { value: '30', dataValue: '2670', label: 'АМг1' },
      { value: '31', dataValue: '2680', label: 'АМг2' },
      { value: '32', dataValue: '2670', label: 'АМг3' },
      { value: '33', dataValue: '2650', label: 'АМг5' },
      { value: '34', dataValue: '2650', label: 'АМг5П' },
      { value: '35', dataValue: '2640', label: 'АМг6' },
      { value: '36', dataValue: '2730', label: 'АМц' },
      { value: '37', dataValue: '2800', label: 'АН-2.5' },
      { value: '38', dataValue: '2800', label: 'В65' },
      { value: '39', dataValue: '2840', label: 'В93' },
      { value: '40', dataValue: '2850', label: 'В94' },
      { value: '41', dataValue: '2850', label: 'В95' },
      { value: '42', dataValue: '2800', label: 'ВАЛ10' },
      { value: '43', dataValue: '2800', label: 'Д1' },
      { value: '44', dataValue: '2800', label: 'Д16' },
      { value: '45', dataValue: '2760', label: 'Д18' },
      { value: '46', dataValue: '2760', label: 'Д19' }
    ]
  },
  {
    value: '5',
    label: 'Бронза',
    list: [
      { value: '1', dataValue: '8000', label: 'Марка' },
      { value: '2', dataValue: '8200', label: 'БрА5' },
      { value: '3', dataValue: '7800', label: 'БрА7' },
      { value: '4', dataValue: '7600', label: 'БрА9Ж4' },
      { value: '5', dataValue: '7600', label: 'БрА9ЖЗЛ' },
      { value: '6', dataValue: '7600', label: 'БрАЖ9-4' },
      { value: '7', dataValue: '7500', label: 'БрАЖН10-4-4' },
      { value: '8', dataValue: '7600', label: 'БрАМц9-2' },
      { value: '9', dataValue: '8200', label: 'БрБ2' },
      { value: '10', dataValue: '8230', label: 'БрБ2.5' },
      { value: '11', dataValue: '8400', label: 'БрКМц3-1' },
      { value: '12', dataValue: '8800', label: 'БрКН1-3' },
      { value: '13', dataValue: '8800', label: 'БрО10' },
      { value: '14', dataValue: '8760', label: 'БрО10Ф1' },
      { value: '15', dataValue: '8500', label: 'БрО10Ц2' },
      { value: '16', dataValue: '8800', label: 'БрО5Ц5С5' },
      { value: '17', dataValue: '9100', label: 'БрО8С12' },
      { value: '18', dataValue: '8800', label: 'БрОФ6.5-0.15' },
      { value: '19', dataValue: '8800', label: 'БрОЦ4-3' },
      { value: '20', dataValue: '8900', label: 'БрОЦС4-4-2.5' },
      { value: '21', dataValue: '9100', label: 'БрОЦС4-4-4' },
      { value: '22', dataValue: '9540', label: 'БрС30' },
      { value: '23', dataValue: '8900', label: 'БрХ1' }
    ]
  },
  {
    value: '6',
    label: 'Латунь',
    list: [
      { value: '1', dataValue: '8500', label: 'Марка' },
      { value: '2', dataValue: '8400', label: 'Л59' },
      { value: '3', dataValue: '8400', label: 'Л60' },
      { value: '4', dataValue: '8440', label: 'Л63' },
      { value: '5', dataValue: '8470', label: 'Л66' },
      { value: '6', dataValue: '8600', label: 'Л68' },
      { value: '7', dataValue: '8610', label: 'Л70' },
      { value: '8', dataValue: '8630', label: 'Л75' },
      { value: '9', dataValue: '8660', label: 'Л80' },
      { value: '10', dataValue: '8750', label: 'Л85' },
      { value: '11', dataValue: '8780', label: 'Л90' },
      { value: '12', dataValue: '8850', label: 'Л96' },
      { value: '13', dataValue: '8600', label: 'ЛА77-2' },
      { value: '14', dataValue: '8200', label: 'ЛАЖ60-1-1' },
      { value: '15', dataValue: '8500', label: 'ЛЖМц59-1-1' },
      { value: '16', dataValue: '8400', label: 'ЛЖС58-1-1' },
      { value: '17', dataValue: '8200', label: 'ЛК80-3' },
      { value: '18', dataValue: '8400', label: 'ЛМц58-2' },
      { value: '19', dataValue: '8500', label: 'ЛО60-1' },
      { value: '20', dataValue: '8500', label: 'ЛО62-1' },
      { value: '21', dataValue: '8600', label: 'ЛО70-1' },
      { value: '22', dataValue: '8450', label: 'ЛС59-1' },
      { value: '23', dataValue: '8500', label: 'ЛС63-3' },
      { value: '24', dataValue: '8500', label: 'ЛС64-2' },
      { value: '25', dataValue: '8300', label: 'ЛЦ16К4' },
      { value: '26', dataValue: '8500', label: 'ЛЦ23А6Ж3Мц2' },
      { value: '27', dataValue: '8500', label: 'ЛЦ30А3' },
      { value: '28', dataValue: '8500', label: 'ЛЦ38Мц2С2' },
      { value: '29', dataValue: '8500', label: 'ЛЦ40С' }
    ]
  },
  {
    value: '7',
    label: 'Магний',
    list: [
      { value: '1', dataValue: '1740', label: 'Марка' },
      { value: '2', dataValue: '1760', label: 'МА1' },
      { value: '3', dataValue: '1800', label: 'МА11' },
      { value: '4', dataValue: '1800', label: 'МА14' },
      { value: '5', dataValue: '1830', label: 'МА15' },
      { value: '6', dataValue: '1780', label: 'МА2' },
      { value: '7', dataValue: '1790', label: 'МА2-1' },
      { value: '8', dataValue: '1800', label: 'МА5' },
      { value: '9', dataValue: '1780', label: 'МА8' },
      { value: '10', dataValue: '1740', label: 'Мг95' },
      { value: '11', dataValue: '1780', label: 'МЛ10' },
      { value: '12', dataValue: '1810', label: 'МЛ12' },
      { value: '13', dataValue: '1790', label: 'МЛ19' },
      { value: '14', dataValue: '1800', label: 'МЛ2' },
      { value: '15', dataValue: '1780', label: 'МЛ3' },
      { value: '16', dataValue: '1830', label: 'МЛ4' },
      { value: '17', dataValue: '1810', label: 'МЛ5' },
      { value: '18', dataValue: '1810', label: 'МЛ6' },
      { value: '19', dataValue: '1760', label: 'МЛ9' }
    ]
  },
  {
    value: '8',
    label: 'Медь',
    list: [
      { value: '1', dataValue: '8960', label: 'Марка' },
      { value: '2', dataValue: '8940', label: 'БрКд1' },
      { value: '3', dataValue: '8830', label: 'БрНБТ' },
      { value: '4', dataValue: '8850', label: 'БрНХК' },
      { value: '5', dataValue: '8920', label: 'БрХ' },
      { value: '6', dataValue: '8900', label: 'БрХЦр' },
      { value: '7', dataValue: '8940', label: 'М0' },
      { value: '8', dataValue: '8940', label: 'М00' },
      { value: '9', dataValue: '8940', label: 'М00б' },
      { value: '10', dataValue: '8940', label: 'М0б' },
      { value: '11', dataValue: '8940', label: 'М0к' },
      { value: '12', dataValue: '8930', label: 'М1' },
      { value: '13', dataValue: '8940', label: 'М1к' },
      { value: '14', dataValue: '8940', label: 'М1р' },
      { value: '15', dataValue: '8940', label: 'М1ф' },
      { value: '16', dataValue: '8940', label: 'М2' },
      { value: '17', dataValue: '8940', label: 'М3' },
      { value: '18', dataValue: '8940', label: 'М3р' },
      { value: '19', dataValue: '8920', label: 'МК' },
      { value: '20', dataValue: '8900', label: 'МН19' },
      { value: '21', dataValue: '8700', label: 'МНЖ5-1' },
      { value: '22', dataValue: '8700', label: 'МНМ15-20' },
      { value: '23', dataValue: '8400', label: 'МНМц3-12' },
      { value: '24', dataValue: '8900', label: 'МНМц40-1.5' },
      { value: '25', dataValue: '8900', label: 'МНМц43-0.5' },
      { value: '26', dataValue: '7800', label: 'НМЖМц28-2.5-1.5' }
    ]
  },
  {
    value: '9',
    label: 'Никель',
    list: [
      { value: '1', dataValue: '8910', label: 'Марка' },
      { value: '2', dataValue: '8700', label: 'НХ9' }
    ]
  },
  {
    value: '10',
    label: 'Олово',
    list: [
      { value: '1', dataValue: '7290', label: 'Марка' },
      { value: '2', dataValue: '7300', label: 'О1' },
      { value: '3', dataValue: '7300', label: 'О1пч' }
    ]
  },
  {
    value: '11',
    label: 'Свинец',
    list: [
      { value: '1', dataValue: '11370', label: 'Марка' },
      { value: '2', dataValue: '11340', label: 'С0' },
      { value: '3', dataValue: '11340', label: 'С1' },
      { value: '4', dataValue: '11340', label: 'С1С' },
      { value: '5', dataValue: '11340', label: 'С2' },
      { value: '6', dataValue: '11340', label: 'С3' },
    ]
  },
  {
    value: '12',
    label: 'Титан',
    list: [
      { value: '1', dataValue: '4500', label: 'Марка' },
      { value: '2', dataValue: '4505', label: 'ВТ1-0' },
      { value: '3', dataValue: '4505', label: 'ВТ1-00' }, 
      { value: '4', dataValue: '4505', label: 'ВТ1-1' },
      { value: '5', dataValue: '4520', label: 'ВТ14' },
      { value: '6', dataValue: '4450', label: 'ВТ20' },
      { value: '7', dataValue: '4600', label: 'ВТ22' },
      { value: '8', dataValue: '4500', label: 'ВТ3-1' },
      { value: '9', dataValue: '4400', label: 'ВТ5' },
      { value: '10', dataValue: '4460', label: 'ВТ5-1' },
      { value: '11', dataValue: '4430', label: 'ВТ6' },
      { value: '12', dataValue: '4550', label: 'ОТ4-1' },
      { value: '13', dataValue: '4490', label: 'ПТ7М' }
    ]
  },
  {
    value: '13',
    label: 'Цинк',
    list: [
      { value: '1', dataValue: '7130', label: 'Марка' },
      { value: '2', dataValue: '7130', label: 'Ц0' },
      { value: '3', dataValue: '7130', label: 'Ц0А' },
      { value: '4', dataValue: '7130', label: 'Ц1' },
      { value: '5', dataValue: '6600', label: 'ЦА4' },
      { value: '6', dataValue: '6700', label: 'ЦАМ4-1' },
      { value: '7', dataValue: '7130', label: 'ЦВ' }
    ]
  },
]
