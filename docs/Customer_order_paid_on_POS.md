---
title: 'Customer order paid on POS'
---
The page is under development

[//]: # (MyCompany дает возможность быстро провести по кассе и принять оплату сформированных заказов покупателя. Вам не придется вводить каждый товар по отдельности, в чек все товары заказа будут добавлены автоматически.)

[//]: # ()
[//]: # (Для того, чтобы использовать этот функционал, убедитесь, что все необходимые настройки установлены и не конфликтуют.)

[//]: # ()
[//]: # (-   Чтобы оплатить заказ по кассе, в [**типе заказа**]&#40;Customer_order_types.md&#41; обязательно должен быть указан [**тип реализации**]&#40;Invoice_type.md&#41;. При проведении оплаты в системе автоматически создается реализация, которая настроена для заказа, а не для [**кассы ККМ**]&#40;Cash_registers.md&#41;.)

[//]: # (-   Настройка цены &#40;включает или не включает налоги&#41; в заказе должна совпадать с настройкой в типе реализации кассы.)

[//]: # ()
[//]: # (![]&#40;images/Customer_order_paid_on_POS_1.png&#41;)

[//]: # (*Рис. 1 Соответствие настроек*)

[//]: # ()
[//]: # (  )
[//]: # ()
[//]: # (Чтобы оплатить заказ по кассе в **Розничная торговля** - **POS** откройте вкладку **По заказу**. В зоне чека выберите покупателя, за заказ которого необходимо принять оплату . Все подтвержденные заказы этого покупателя будут отображены во вкладке **По заказу**.)

[//]: # ()
[//]: # (![]&#40;images/Customer_order_paid_on_POS_2.png&#41;)

[//]: # (*Рис. 2 Список заказов покупателя*)

[//]: # ()
[//]: # (  )
[//]: # ()
[//]: # (Чтобы добавить товары из заказа в чек, необходимо выделить заказ в списке и нажать кнопку **Добавить в чек**.  Товары из заказа отобразятся в чеке. Вы можете добавить в чек и принять оплату сразу за несколько заказов.)

[//]: # ()
[//]: # (Если товары не добавляются в чек, возможны следующие причины:)

[//]: # ()
[//]: # (-   заказ уже оплачен)

[//]: # (-   есть связанный с заказом невыполненный производственный заказ)

[//]: # (-   не осуществлена отгрузка, которая согласно настройкам заказа должна предшествовать оплате.)

[//]: # ()
[//]: # (![]&#40;images/Customer_order_paid_on_POS_3.png&#41;)

[//]: # (*Рис.3 Добавление позиций заказа в чек*)

[//]: # ()
[//]: # (Нажмите оплатить и [**примите оплату**]&#40;POS.md#Chequepay&#41;.)

  

  

