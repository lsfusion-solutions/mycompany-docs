---
title: 'Puchase order'
---

Для заказа товаров  используется **Заказ поставщику**. Все ваши заказы отображаются в **Закупки-Заказы поставщикам**. Для удобства навигации заказы на каждой стадии жизненного цикла выделяются определенным цветом. Создание  и редактирование заказов осуществляется соответствующими кнопками в правом нижнем углу. Для легкой навигации по заказам в верхней части формы можно установить период, за который будут отображаться заказы, сбоку доступны другие быстрые фильтры, например по типу, поставщику и др.  

  
Рис. 1 Список заказов поставщикам

  

![](attachments/12812367/12812368.png)

Чтобы открыть **Заказ**, кликните на него 2 раза в списке, или нажмите кнопку **Редактировать**. Чтобы создать новый заказ, используйте кнопку **Добавить**.  Форма **Заказа поставщику** дает пользователю возможность увидеть сразу всю важную информацию: дату заказа, поставщика, список заказанных товаров и их стоимость, статус заказа, был ли уже получен товар, есть ли задолженность перед поставщиком.  Это существенно экономит ваше время.

  
Рис. 2 Форма заказа поставщику

  

Для быстрой и корректной работы с заказом тщательно заполните необходимую информацию в полях формы.  Если у вас настроены **[Контрагенты](Partners_directory.md) **и **[товары](Items_directory.md)**, большая часть информации будет заполнена автоматически.

  

**Тип** -  выберите тип из списка, который откроется по клику.  Если нужного типа нет, добавьте с помощью кнопки Добавить или настройте в Закупки - Типы заказов. От выбранного типа заказа будет зависеть, какие  документы будут созданы на основе заказа,  и иные параметры. Наиболее распространенный тип - закупка у поставщика с последующим размещением на своем складе.  

**Дата **- в новом заказе в поле автоматически указана дата и время создания. Их можно изменить по необходимости.

Будьте внимательны и указывайте не только дату, но и время заказа, т.к. это важно при партионном учете товара. 

**Номер** заказа также будет автоматически создан при первом сохранении, если вы настроили **[нумераторы](Numerators.md)**. 

Выберите ** Поставщика **из списка **Контрагентов**, который откроется по клику в поле. 

**Компания** - укажите компанию-покупателя.

**Место хранения** - укажите склад или конкретную зону склада, где будет хранится закупленный товар.  Подробнее о настройке мест хранения можно найти **[здесь](Location_settings.md)**.

  
Рис. 3 Вкладка Прочая информация 

  

Во вкладке **Прочая информация**  укажите:

**Условия оплаты** - если у поставщика указано условие оплаты по умолчанию, то поле заполниться автоматически. Если нет, или для данной закупки будет действовать другое условие, кликните в поле и выберите условие оплаты из списка.  Если подходящего нет, создайте его с помощью кнопки **Добавить**.

**Наш представитель** - сотрудник, который будет ответственным за эту закупку.  Выберите ** **из списка **Контрагентов**, который откроется по клику в поле.

**Входящий номер поставщика** - номер,за которым данная закупка учтена у поставщика.  Если вы знаете этот номер, он может существенно облегчить коммуникацию с вашим партнером при возникновении необходимости быстро идентифицировать данную закупку, например, при сверке данных.

**Планируемая дата** - по умолчанию здесь проставляется дата и время создания заказа. Укажите предполагаемый срок поставки.

## **Добавление списка товаров** 

Товары, которые вы покупаете отображаются во вкладке **Спецификация**. Вы можете использовать 2 способа создания спецификации товаров :

 <u>***1. Добавление товаров по одному.** *</u>Нажмите **Добавить** во вкладке спецификации, появиться пустая строка. кликните в столбце **Номенклатура**, и выберите товар в открывшемся окне номенклатур. Товар отобразиться в строке. Введите количество в соответствующем столбце. 

### Рис. 3 Вкладка Спецификация

  

<u>***2. Добавление товаров списком.***</u> Перейдите во вкладку **Подбор**. В правом блоке будут отображены все товары из **Категории**, выбранной в левом блоке.  Все товары, для которых вы укажете количество, будут автоматически отображены в спецификации. В столбце ***Доступно*** показано количество товаров, которые есть в вашем распоряжении, т.е. находятся на складе и не зарезервированы для определенных покупателей. Эта информация позволит вам оперативно скорректировать количество товара для закупки.

  
Рис. 4 Вкладка Подбор

  

 Осталось ввести цену товара, и налоги, которые начисляются на товары. Эти данные также могут быть автоматически заполнены. **Цена** товара отображается, если у вас загружен **[прайс-лист](Vendor_pricelists.md)** на этот товар данного поставщика, или указана цена в **[карточке товара](Items_directory.md)** при плановом методе расчета себестоимости. Налоги проставляются автоматически, если указаны в **[карточке товара](Items_directory.md). **В зависимости от настроек типа заказа цена будет отображаться с учетом или без учета налогов. 

  

Когда все данные в заказе заполнены, в поле итогов отображается стоимость закупки. Кроме того, в полях **Долг/ Просроченный долг** отображаются взаимные задолженности.  Если в поле положительная сумма, то это задолженность поставщика перед вами, соответственно, можно, например, применить взаимозачет. Если сумма отрицательная, значит у вас уже есть неоплаченные обязательства перед данным поставщиком. 

  

Новый заказ по умолчанию имеет статус ***Черновик***, который отображается в блоке **Статусы**. Заказ может находиться в одном из 5 статусов, которые однозначно показывают пользователю на каком этапе находится процесс закупки. Переход между статусами осуществляется посредством выполнения определенных действий.  

|<p>Статус</p>|<p>Возможные действия</p>|<p>Описание </p>|
|---|---|---|
|*<strong>Черновик</strong>* |<p><strong>Отправить</strong>/Подтвердить/Копировать/<strong>Печать </strong></p>|<p>В статусе черновика вы указываете существенные данные для будущей сделки, например, указываете поставщика, формируете список товаров в заказе, указываете  сроки поставки и т.д. Далее вы можете отправить заказ поставщику для согласования деталей, например цены или условий оплаты, для этого выбираете действие <strong>Отправить</strong> и заказ переходит в статус *<strong>Отправлен</strong>*. </p><br/><p>Вполне вероятно, что у вас уже есть определенные договоренности с поставщиком, вы точно можете указать все существенные условия, тогда заказ можно сразу <strong>Подтвердить</strong>, соответственно, он перейдет в статус *<strong>Подтвержден</strong>*.</p><br/><p><strong>Копировать</strong> - создает копию заказа</p><br/><p><strong>Печать</strong> - позволяет вам вывести на печать или сохранить в формате pdf "бумажный" документ заказа для последующего использования.</p>|
|<strong>Отправлен</strong>|<strong>Подтвердить</strong>/<strong>Отменить</strong>/Копировать/<strong>Печать </strong>|<p>Когда вы уточнили и согласовали все детали закупки с поставщиком, подписали договор и внесли данные в заказ, нажимайте <strong>Подтвердить</strong>, заказ перейдет в статус *<strong>Подтвержден </strong>*и будет создано <strong>Поступление</strong>. </p><br/><p>Если вы не пришли к согласию с поставщиком, и сделки не будет, вы можете <strong>Отменить</strong> заказ.  По наличию/количеству отмененных и выполненных заказов вы можете анализировать своих поставщиков.</p>|
|<strong>Подтвержден</strong>| <strong>Закрыть</strong>/<strong>Создать поступление</strong>/<strong>Отменить</strong>/Копировать/<strong>Печать</strong>|<p>По подтвержденному заказу получают и оплачивают товар. После того, как вы оформили <strong>Приемку</strong> вы можете <strong>создать Поступление </strong>на поставленные товары - система создаст документ [<strong>Поступление</strong> ](Vendor_payments.md)на принятое количество товара. </p><br/><p>Если, по каким-то причинам на данной стадии заказ не может быть выполнен, его можно <strong>Отменить </strong> и напечатать, например, для формирования отчетности. </p><br/><p>Выполненный заказ, который получен, размещен и оплачен, можно <strong>Закрыть.</strong></p>|
|<strong>Закрыт</strong>|<strong>Отменить</strong>/Копировать/<strong>Печать</strong>|Выполненный заказ при необходимости можно [<strong>Отменить</strong> ](Purchase_order_cancellation.md)или напечатать.|
|<strong>Отменен</strong>|<strong>Печать</strong>|Отмененный заказ можно напечатать для отчета или других нужд.|

Use a **Purchase order** to order items. All your orders are displayed in **Purchase** - **Purchase orders** . For ease of navigation, orders at each stage of the life cycle are highlighted in a certain color. You can create and edit orders using the appropriate buttons in the lower right corner. At the top of the form you can set the period and view orders, that refere to the selcted date interval. Other quick filters are available on the side, for example, by type, vendor, etc.

![](attachments/12812367/13828189.png)  
Pic. 1 Purchase orders list

  

To open an order, dubble click it, or highlight and click **Edit**. To create a new order, use the **Add** button. The Purchase order form allows the user to get all the important information at once: the date of the order, the vendor, the list of ordered items and their cost, the status of the order, whether the goods have already been received, whether there is a debt to the supplier. It saves you a lot of time.

![](attachments/12812367/13828190.png)  
Pic. 2 Purchase order form

  

To work quickly and correctly with your order, fill in the required information carefully. If you have **[Partners](Partners_directory.md) **and **[items](Items_directory.md)** set up, most of the information will be filled in automatically.

**Type** - click in the field and choose the type you need from the list. If there is no necessary type, create it with the **Add** button or configure in **Purchase** -   **Settings** - **[Order type](Purchase_order_type.md)**. Types of documents  created based on this order and some other parameters depend on the chosen type of order.  

**Date **- the creation date and time are automatically specified in this field in a new order. You can change them as needed.

Be careful and indicate not only the date, but also the time of the order, as this is important in batch accounting.

The order Number will also be automatically created the first time you save the order, if you have set up numerator.

Select **Vendor** from the list of **Partners** that opens by clicking in the field.  If you have several **Companies**, specify which one is the customer in this order. 

**Location** - specify the location the purchased item will be stored in. Learn more about setting up storage **[locations](Location_settings.md)**.

**Currency** - choose the currency the item price is specified in.

![](attachments/12812367/13828191.png)  
Pic. 3 Other information tab 

  

On the **Other information** tab specify the following. 

**Payment terms** - if the vendor has default payment terms set up, the field will be filled automatically. If not, or other then default terms apply to this purchase, click in the field and select payment terms from the list. If there is no match, create it using the **Add** button.

**Our representative** - еhe employee, responsible for this purchase. Select from the list of Partners that opens by clicking in the field. 

**Vendor reference** - vendor's ID of this purchase. Having this reference can significantly facilitate communication with your partner if you need to quickly identify this purchase, for example, when reconciling data. 

**Scheduled date **- by default  the date and time of the order creation is posted here. Specify the expected delivery date.

## **Adding list of items **

The items you buy are specified on the Lines tab. You can use two methods of adding items to the order. 

 <u>***1. One by one** *</u>    Click Add on the **Lines** tab, an empty row appears. Click in the ***Item*** column and select the item in the item list that opens. The item appears in the line. Enter the quantity in the appropriate column. 

![](attachments/12812367/13828192.png)  
Pic. 3 Lines tab

  

<u>***2. List of items***</u>  Click the **Search** tab. The right block displays all items from the Category selected in the left block. Every item you specify a quantity for will be automatically displayed on the Lines tab. The ***Available*** column shows the number of items at your disposal, that is, in stock and not reserved for certain customers. This information will allow you to quickly adjust the quantity of the item to be purchased. You may also want to use filters that help to display only the items you are interested in.

![](attachments/12812367/13828193.png)  
Pic. 4 Search tab

  

 You have to enter the price of the item and the taxes that are applied to the items. This data can also be automatically populated. The item price is displayed if you have an  active [**pricelist**](Vendor_pricelists.md) for this item from this vendor, or if you specify the planned cost in the [**item master record**](Items_directory.md). Taxes are automatically placed if they are specified in the item record. Depending on the order type settings, the price will be displayed with or without taxes. 

  

When all data in the order is filled in the total purchase value is displayed. In addition, the **Debt**/**Overdue debt** fields display mutual debts. If there is a positive amount in the field, then this is the vendor's debt to you, respectively, you can, for example, apply netting. If the amount is negative, then you already have unpaid obligations to this supplier.

![](attachments/12812367/13828194.png)

  

 A new order has the default  status **Draft**, which is displayed in the Status block. The order can be in one of 5 statuses that clearly show the user at what stage the purchasing process is. The order changes its status after performing certain actions. 

|Статус|Возможные действия|Описание |
|---|---|---|
|*<strong>Черновик</strong>* |<p><strong>Отправить</strong> /Подтвердить /<strong>Печать </strong></p>|<p>В статусе черновика вы указываете существенные данные для будущей сделки, например, указываете поставщика, формируете список товаров в заказе, указываете  сроки поставки и т.д. Далее вы можете отправить заказ поставщику для согласования деталей, например цены или условий оплаты, для этого выбираете действие <strong>Отправить</strong> и заказ переходит в статус *<strong>Отправлен</strong>*. </p><br/><p>Вполне вероятно, что у вас уже есть определенные договоренности с поставщиком, вы точно можете указать все существенные условия, тогда заказ можно сразу <strong>Подтвердить</strong>, соответственно, он перейдет в статус *<strong>Подтвержден</strong>*.</p><br/><p><strong>Печать</strong> - позволяет вам вывести на печать или сохранить в формате pdf "бумажный" документ заказа для последующего использования.</p>|
|<strong>Отправлен</strong>|<strong>Подтвердить</strong> /<strong>Отменить</strong> / <strong>Печать </strong>|<p>Когда вы уточнили и согласовали все детали закупки с поставщиком, подписали договор и внесли данные в заказ, нажимайте <strong>Подтвердить</strong>, заказ перейдет в статус *<strong>Подтвержден </strong>*и будет создано <strong>Поступление</strong>. </p><br/><p>Если вы не пришли к согласию с поставщиком, и сделки не будет, вы можете <strong>Отменить</strong> заказ.  По наличию/количеству отмененных и выполненных заказов вы можете анализировать своих поставщиков.</p>|
|<strong>Подтвержден</strong>| <strong>Закрыть</strong> / <strong>Приобрести</strong>/<strong>Отменить</strong>/ <strong>Печать</strong>|<p>По подтвержденному заказу получают и оплачивают товар. После того, как вы <strong>Приняли</strong> <strong>Поступление</strong> вы можете <strong>Приобрести</strong> поставленные товары - система создаст документ [<strong>Приобретение</strong>](Vendor_payments.md) на принятое количество товара. </p><br/><p>Если, по каким-то причинам на данной стадии заказ не может быть выполнен, его можно <strong>Отменить </strong> и напечатать, например, для формирования отчетности. </p><br/><p>Выполненный заказ, который получен, размещен и оплачен, можно <strong>Закрыть.</strong></p>|
|<strong>Закрыт</strong>|<strong>Отменить</strong>/ <strong>Печать</strong>|Выполненный заказ при необходимости можно [<strong>Отменить</strong>](Purchase_order_cancellation.md) или напечатать.|
|<strong>Отменен</strong>|<strong>Печать</strong>|Отмененный заказ можно напечатать для отчета или других нужд.|

  

  



  
