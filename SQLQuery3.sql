USE [CashDragon]
GO

set identity_insert [UserProfile] on
insert into UserProfile (Id, DisplayName, FirstName, LastName, Email, CreateDateTime, ImageLocation, UserTypeId) values (1, 'Foo', 'Foo', 'Barington', 'foo@bar.com', '2020-04-23', 'https://robohash.org/numquamutut.png?size=150x150&set=set1', 1);
set identity_insert [UserProfile] off

set identity_insert [UserType] on
insert into [UserType] ([ID], [Name]) VALUES (1, 'Admin'), (2, 'Author');
set identity_insert [UserType] off

set identity_insert [Scales] on
insert into [Scales] ([scale_id], [userProfileId], [bill_name], [allocated_amount], [goal_amount]) values (1, 1, 'Gas', 10.00, 100.00);
set identity_insert [Scales] off

set identity_insert [Goals] on
insert into [Goals] ([goal_id], [userProfileId], [goal_name], [goal_amount], [allocated_amount]) values (1, 1, 'Car', 2000.00, 500.00);
set identity_insert [Goals] off

set identity_insert [Ledger] on
insert into [Ledger] ([Id], [UserProfileId], [LedgerAmount]) values (1, 1, 300.00);
set identity_insert [Ledger] off

set identity_insert [Hoard] on
insert into [Hoard] ([savings_id], [userProfileId], [savings_amount]) values (1, 1, 3000.00);
set identity_insert [Hoard] off