﻿using NHibernate;

namespace OpenEhs.Data
{
    public class GenericTransaction : IGenericTransaction
    {
        private readonly ITransaction _transaction;

        public GenericTransaction(ITransaction transaction)
        {
            _transaction = transaction;
        }

        public void Dispose()
        {
            _transaction.Dispose();
        }

        public void Commit()
        {
            _transaction.Commit();
        }

        public void Rollback()
        {
            _transaction.Rollback();
        }
    }
}