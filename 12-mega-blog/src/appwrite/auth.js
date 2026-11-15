import React from 'react'
import conf from '../config/conf.js'
import { Client, Account, ID } from 'appwrite'

export class AuthService {
  client = new Client()
  account

  constructor() {
    if (!conf.appwriteUrl || !conf.appwriteProjectId) {
      this.account = null
      return
    }

    this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId)
    this.account = new Account(this.client)
  }

  async createAccount({ email, password, name }) {
    if (!this.account) {
      return null
    }

    try {
      const userAccount = await this.account.create(ID.unique(), email, password, name)
      if (userAccount) {
        return this.login({ email, password })
      }
      return userAccount
    } catch (error) {
      throw error
    }
  }

  async login({ email, password }) {
    if (!this.account) {
      return null
    }

    try {
      return await this.account.createEmailSession(email, password)
    } catch (error) {
      throw error
    }
  }

  async getCurrentUser() {
    if (!this.account) {
      return null
    }

    try {
      return await this.account.get()
    } catch (error) {
      console.log('Appwrite getCurrentUser error: ', error)
    }
    return null
  }

  async logout() {
    if (!this.account) {
      return
    }

    try {
      await this.account.deleteSessions()
    } catch (error) {
      console.log('Appwrite logout error: ', error)
    }
  }
}

const authService = new AuthService()

export default authService