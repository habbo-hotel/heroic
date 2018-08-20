// Dependencies
import Server from '@/web/server'

// Route List
export default class Routing {
  static async init () {
    // Heroic
    await Server.route('GET', 'heroic', 'Heroic@read') // Get heroic settings
    // Session
    await Server.route('POST', 'session', 'Session@create') // Login as user
    await Server.route('GET', 'session/client', 'Session@client', true) // Login to client
    // User
    await Server.route('POST', 'user', 'User@create') // Create user
    await Server.route('GET', 'user/:user', 'User@read') // Find user by username or email
    await Server.route('GET', 'user/:user/:relations', 'User@read') // Find user - with relationship attachment
    // Permission
    await Server.route('GET', 'permission/:id', 'Permission@read') // Fetch permission by id or type
    await Server.route('GET', 'permission/:id/:relations', 'Permission@read') // Fetch permission by id or type (with relations)
    // News Articles
    await Server.route('GET', 'article/:id', 'Article@read') // Fetch article
    await Server.route('GET', 'article/:id/:relations', 'Article@read') // Fetch article (with relations)
    // News Categories
    await Server.route('GET', 'category/:id', 'Category@read') // Fetch category
    await Server.route('GET', 'category/:id/:relations', 'Category@read') // Fetch category (with relations)
  }
}