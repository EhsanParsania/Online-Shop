export const wordToPersian = (word) => {
  switch (word) {
    case 'groceries':
      return 'کالاهای اساسی و خوار و بار'
    case 'dairies':
      return 'لبنیات'
    case 'proteins':
      return 'محصولات پروتئینی'
    case 'drinks':
      return 'نوشیدنی'
    case 'bread':
      return 'نان'
    case 'rice':
      return 'برنج'
    case 'oil':
      return 'روغن'
    case 'sugar':
      return 'قند و نبات'
    case 'yogurt':
      return 'ماست'
    case 'milk':
      return 'شیر'
    case 'dough':
      return 'دوغ'
    case 'butter':
      return 'کره حیوانی و گیاهی'
    case 'beef':
      return 'گوشت گاو و گوساله'
    case 'chicken':
      return 'گوشت مرغ'
    case 'egg':
      return 'تخم مرغ '
    case 'fish':
      return 'ماهی، میگو و خاویار'
    case 'coffee':
      return 'قهوه'
    case 'coco':
      return ' شکلات داغ'
    case 'tea':
      return 'چای'
    case 'juice':
      return 'آبمیوه'




    default:
      return '*'
  }
}