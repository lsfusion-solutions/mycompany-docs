---
title: 'Receipts'
---
The page is under development

[//]: # ( Когда **Заказ** переведен в статус ***Подтвержден***, автоматически создается **Приемка** в статусе ***К приемке*** на заказанное количество товара &#40;см. настройки **[типа заказа]&#40;Purchase_order_type.md&#41;**&#41;. **Приемка** также будет отображаться в общем списке документов приемки в модуле **Склад - Приемки**.)

[//]: # ()
[//]: # (  )
[//]: # ()
[//]: # (![]&#40;images/Receipts_1.png&#41;  )

[//]: # (*Рис. 1 Подтвержденный заказ*)

[//]: # ()
[//]: # (  )
[//]: # ()
[//]: # (  )
[//]: # ()
[//]: # (![]&#40;images/Receipts_2.png&#41;  )

[//]: # (*Рис. 2 Список поступлений*)

[//]: # ()
[//]: # (  )
[//]: # ()
[//]: # (Когда товары к вам поступают, вы обрабатываете **Приемку**, чтобы на складе увеличились остатки принятых товаров. Вы можете открыть документ из формы заказа или из общего списка.)

[//]: # ()
[//]: # (В документе автоматически указан **Тип** приемки, который настроен в **[типе заказа]&#40;Purchase_order_type.md&#41;**. Перечень **[типов приемок]&#40;Receipt_type.md&#41;** вы также можете настроить самостоятельно.)

[//]: # ()
[//]: # (**Место хранения** будет указан тот же, что и в заказе.)

[//]: # ()
[//]: # (В столбце **Принятое количество** необходимо проставить, сколько поступило товаров. Если все соответствует заказу &#40;**Планируемое количество**&#41;, то нажмите кнопку **Заполнить Принято** и в столбце проставится заказанное количество.)

[//]: # ()
[//]: # (Нажмите **Принят** и статус поступления изменится на ***Принят***, остаток товаров на складе увеличится, в заказе можно будет создать **[Поступление]&#40;Vendor_payments.md&#41;** для учета товаров.)

[//]: # ()
[//]: # (![]&#40;images/Receipts_3.png&#41;  )

[//]: # (*Рис. 3 Прием товаров*)

[//]: # ()
[//]: # (  )
[//]: # ()
[//]: # (Когда товар принят, его можно разместить, т.е. определить конкретное место на складе, где он будет находиться. Для этого выделите товар в списке, нажмите **Размещен**, выберите [**место хранения**]&#40;Location_settings.md&#41; из открывшегося списка и введите количество товара, которое будет храниться в этом месте. В зависимости от ваших планов, товар, например, может быть помещен на хранение, или направлен сразу в зону отгрузки, чтобы формировать поставку покупателям, или распределен частями в разные зоны склада. Для каждого принятого наименования в блоке **Размещение** будет отображаться место нахождения и сколько товаров там размещено. Когда вы указали место хранения для всех поступивших товаров, измените статус поступления на ***Размещен*** соответствующей кнопкой в левом верхнем углу и товары будут числиться в указанных местах хранения.)

[//]: # ()
[//]: # (Функция размещения товара будет доступна, если настроена для используемого [**типа поступления**]&#40;Receipt_type.md&#41;.)

[//]: # ()
[//]: # (![]&#40;images/Receipts_4.png&#41;  )

[//]: # (*Рис. 4 Размещение товаров*)

[//]: # ()
[//]: # (  )
[//]: # ()
[//]: # (Приемку можно создать и без заказа, использую кнопку **Добавить** &#40;см. рис. 2&#41;, тогда все данные, такие как поставщик, тип документа, место хранения, спецификация и количество товаров, и др. необходимо будет заполнить вручную.)

  



  

  
